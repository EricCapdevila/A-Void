
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

      if(position === top){
        this.comingFrom = "top"
      }else if(position === bottom){
        this.comingFrom = "bottom"
      }else if(position === left){
        this.comingFrom = "left"
      }else if(position === right){
        this.comingFrom = "right"
      }

      return position;
    };
    this.comingFrom = "" 
    this.x = this.position()[0];
    this.y = this.position()[1];
    this.speed = 3;
  }

  draw (){
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
  move(){
/*
    let availableSpeed = [-2 ,-1 ,0 , 1, 2];
    let randomSpeed = availableSpeed[Math.floor(Math.random()* availableSpeed.length)];
  */     
    
    if (this.comingFrom === "left"){;
      this.x = this.x + this.speed;
    }else if(this.comingFrom === "right"){
      this.x = this.x - this.speed;
      //this.y = this.y + randomSpeed;
    }else if(this.comingFrom === "top"){
      this.y = this.y + this.speed;
      //this.x = this.x + randomSpeed;
    }else if(this.comingFrom === "bottom"){
      this.y = this.y - this.speed;
     // this.x = this.x + randomSpeed;
    }
    
    }
  }

