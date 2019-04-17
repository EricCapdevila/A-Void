
class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.planet = null;
    this.asteroids= [];   
    this.timeLeft =10; 
    this.gameEnd = false;
  }
  timerSetGameEnd(){
    
    const timerGame = setInterval(() => {
      --this.timeLeft;
      if(this.timeLeft<0){
         this.gameEnd = true;
          buildWinScreen();
          clearInterval(timerGame);
      }else if(this.planet.lives===0){
        this.gameEnd = true;
          buildDeathScreen()
          clearInterval(timerGame);
        }
      },1000);
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
  //endLoop(id){
    //if(this.gameEnd === true){
    //cancelAnimationFrame(id);
    //console.log('end')
    //clearInterval(spawnAsteroids);
    //clearInterval(timerGame);
   // }
  //}
   
  startLoop(){
      const spawnAsteroids = setInterval(() => {
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
      console.log(this.gameEnd)
      if(!this.gameEnd){
        requestAnimationFrame(loop); 
      }
    }
   // this.gameEnd = false;
    //console.log(this.gameEnd)
     requestAnimationFrame(loop);
    } 
}
 

 
