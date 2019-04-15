
class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.planet = null;
    this.asteroids= null;
  }
  clear(){
    this.ctx.clearRect(0,0,this.canvas.offsetWidth, this.canvas.offsetHeight);
  }
  updatePositions(){
    this.planet.move();
    this.asteroids.move();
  }
  draw(){
    this.planet.draw();
    this.asteroids.draw();
  }

  startLoop(){
    this.planet = new Planet(canvas);
    this.asteroids = new Asteroid(canvas);
    const loop =()=>{
      this.clear();
      this.updatePositions();
      this.draw();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
}
 

 
