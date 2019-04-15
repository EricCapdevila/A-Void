
class Planet{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.size = 7;
    this.lives = 3;
    this.x = 150;
    this.y = 150/2;
    this.speedX= 0
    this.speedY= 0
  }
  draw (){
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.x - this.size/2, this.y-this.size/2, this.size, this.size);
  }
  move(){
    if(this.x > 300){
      this.x = 300;
    }else if(this.x < 0){
      this.x = 0;
    }else{
      this.x = this.x + this.speedX;
    }
    if(this.y > 150){
      this.y = 150;
    }else if(this.y < 0){
      this.y = 0;
    }else{
      this.y = this.y + this.speedY;
    }
  }
}


