
class Asteroid{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.size = 5;
    this.position = function (){
      let randomY = Math.floor((Math.random()*this.canvas.height - this.size));
      let randomX = Math.floor((Math.random()*this.canvas.width - this.size));
      
      let top = [randomX, -10];
      let bottom = [randomX, 160];
      let left = [-10, randomY];
      let right = [310, randomY];
      
      let spawnPosibilities = [top, bottom, left, right]
      let position = spawnPosibilities[Math.floor(Math.random()*spawnPosibilities.length)];
      

      if(position === top){
        this.comingFrom = "top"
      }else if(position === bottom){
        this.comingFrom = "bottom"
      }else if(position === left){
        this.comingFrom = "left"
      }else if(position === right){
        this.comingFrom = "right"
      }
      console.log(position);
      this.x = position[0];
      this.y = position[1];
    
    };
    this.comingFrom = "" 
    this.position()
    this.speed = 2;
    this.randomDeviation = function(){
      let availableSpeed = [-1.5 ,-1 , -0.5 ,0 , 0.5, 1, 1.5];
      return availableSpeed[Math.floor(Math.random()* availableSpeed.length)];
    }
    this.deviation = this.randomDeviation();
  }

  draw (){
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
  move(){
    if (this.comingFrom === "left"){;
      this.x = this.x + this.speed;
      this.y = this.y + this.deviation;
    }else if(this.comingFrom === "right"){
      this.x = this.x - this.speed;
      this.y = this.y + this.deviation;
    }else if(this.comingFrom === "top"){
      this.y = this.y + this.speed;
      this.x = this.x + this.deviation;
    }else if(this.comingFrom === "bottom"){
      this.y = this.y - this.speed;
      this.x = this.x + this.deviation;
    }
  }
  collision(){
 

  }
}
