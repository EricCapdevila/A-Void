
 
 
 
class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.planet = null;
    this.asteroids=[];
  }
  clear(){
    this.ctx.clearRect(0,0,this.canvas.offsetWidth, this.canvas.offsetHeight);
  }
  updatePositions(){
    this.planet.move();
  }
  draw(){
    this.planet.draw();
  }

  startLoop(){
    this.planet = new Planet(canvas);
    const loop =()=>{
      this.clear();
      this.updatePositions();
      this.draw();
      console.log("cat")
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
}
 

 
