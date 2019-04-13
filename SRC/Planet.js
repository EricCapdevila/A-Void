
class Planet{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.size = 10;
    this.lives = 3;
    this.x = 150;
    this.y = 80;
    this.speedX= 0
    this.speedY= 0
  }
  draw (){
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.x - this.size/2, this.y-this.size/2, this.size, this.size);
  }
  move(){
   // if(this.x < this.canvas.offsetWidth || this.x > 0 ){
      this.x = this.x + this.speedX;
      
    //}else if (this.y < this.canvas.offsetHeight || this.y > 0){
      this.y = this.y + this.speedY;
    //}
  }
}





