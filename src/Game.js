
class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.planet = null;
    this.asteroids= [];   
    this.timeLeft = 60; 
    this.gameEnd = false;
  }
  timerSetGameEnd(){
    let timerID = setInterval(() => {
      --this.timeLeft;

      if(this.timeLeft<0){
         this.gameEnd = true;
          buildWinScreen();
      clearInterval(timerID);
      console.log("e")
      }else if(this.planet.lives===0){
        this.gameEnd = true;
          buildDeathScreen()
        clearInterval(timerID);
      }
    },1000);
    
   // if (this.timeLeft<0){
      //clearInterval(timerID);
      //this.timeLeft = 0;
      //console.log("below 0");
    }
  clear(){
    this.ctx.clearRect(0,0,this.canvas.offsetWidth, this.canvas.offsetHeight);
  }
  updatePositions(){
    this.planet.move();
    this.asteroids.forEach(function (asteroid){
      asteroid.move();
    })
  }
  draw(){
    this.ctx.fillStyle = 'skyblue';
    this.ctx.font = "15px Arial";
    this.ctx.fillText(this.timeLeft , 10, 15);
    this.ctx.fillStyle = 'skyblue';
    this.ctx.font = "15px Arial";
    this.ctx.fillText("♥" + this.planet.lives , 10, 30);
    this.planet.draw();
    this.asteroids.forEach(function (asteroid){
      asteroid.draw(); 
    })
  }

  destroyAsteroids(){
    this.asteroids.forEach((e)=>{
     
      if(e.collision||e.lifeTime===0){
        let index = this.asteroids.indexOf(e);
        this.asteroids.splice(index,1);
        clearInterval(e.timer)
      }
    });
  }
   
  startLoop(){
      setInterval(() => {
      this.asteroids.push (new Asteroid (this.canvas));
    },250);
    
    this.planet = new Planet(canvas, this.asteroids);

    this.timerSetGameEnd();    

    const loop =()=>{
      this.clear();
      this.updatePositions();
      this.planet.collision();
      this.draw();
      this.destroyAsteroids();
      
      requestAnimationFrame(loop);
    }
     if(this.gameEnd === false|| this.planet.dead=== false)
       requestAnimationFrame(loop);
     
  }
}
 

 
