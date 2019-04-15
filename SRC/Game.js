
class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.planet = null;
    this.asteroids= [];
    
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
    this.planet.draw();
    this.planet.collision();
    this.asteroids.forEach(function (asteroid){
      asteroid.draw(); 
    })
  }
  startLoop(){
    
    setInterval(() => {
      this.asteroids.push (new Asteroid (this.canvas));
    },250);
    
    this.planet = new Planet(canvas, this.asteroids);
    

    const loop =()=>{
      this.clear();
      this.updatePositions();
      this.draw();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
}
 

 
