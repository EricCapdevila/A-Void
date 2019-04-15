
class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.planet = null;
    this.asteroids= [];   
    this.timeLeft = 60; 
  }
  timer(){
    let timerID = setInterval(() => {
      --this.timeLeft;
      
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
    this.ctx.fillStyle = 'white';
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.timeLeft , 10, 10);
    this.planet.draw();
    //this.planet.collision();
    this.asteroids.forEach(function (asteroid){
      asteroid.draw(); 
    })
  }
  startLoop(){
    
    setInterval(() => {
      this.asteroids.push (new Asteroid (this.canvas));
    },250);
    
    this.planet = new Planet(canvas, this.asteroids);
    this.timer();    

    const loop =()=>{
      this.clear();
      this.updatePositions();
      this.draw();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
}
 

 
