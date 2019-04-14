
class Asteroid{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.size = 5;
    this.position = function (){
      let randomY = Math.floor(Math.random()*150);
      let randomX = Math.floor(Math.random()*300);
      
      let top = [randomX, -10];
      let bottom = [randomX, 160];
      let left = [-10, randomY];
      let right = [310, randomY];
      
      let spawnPosibilities = [top, bottom, left, right]
      let position = spawnPosibilities[Math.floor(Math.random()*spawnPosibilities.length)];
      
      return position;
    };
    this.x = this.position()[0];
    this.y = this.position()[1];
    this.speedX = 0
    this.speedY = 0
  }

  draw (){
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
  move(){
    /*if (this.x < 0), this.y = this.y - this.speed

    this.x = this.x + this.speedX; // 
    this.y = this.y + this.speedY;
    */
    }
  }

