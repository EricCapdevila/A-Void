
class Planet{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.size = 10;
    this.lives = 3;
    this.x = 50;
    this.y = 50;
    this.speed = 2;

  }
  draw (){
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.x - this.size/2, this.y-this.size/2, this.size, this.size);
  }
  move(){
    this.y = this.y + this.speed;
  }





}





