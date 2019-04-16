
class Planet{
  constructor(canvas,array){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.size = 15;
    this.lives = 3;
    this.x = 150;
    this.y = 150/2;
    this.speedX = 0;
    this.speedY = 0;
    this.asteroids = array; 
  }

  draw(){
    //this.ctx.fillStyle = 'green';
    //this.ctx.fillRect(this.x - this.size/2, this.y-this.size/2, this.size, this.size);
    let planet = new Image(15, 15);
    planet.src = '/material/planetSprite.png';
    this.ctx.drawImage(planet, this.x, this.y, this.size, this.size);
    
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
  collision(){
    let leftSide = this.x -this.size/2;
    let topSide = this.y - this.size/2;
    let rightSide = this.x + this.size/2;
    let downSide = this.y + this.size/2;
       
    this.asteroids.forEach((asteroid)=>{
      //console.log(leftSide < asteroid.x + asteroid.size/2 && rightSide > asteroid.x - asteroid.size/2)
      //console.log(topSide > asteroid.y + asteroid.size/2 && downSide < asteroid.y - asteroid.size/2)
      if(leftSide < asteroid.x + asteroid.size/2 && rightSide > asteroid.x - asteroid.size/2 &&  topSide > asteroid.y + asteroid.size/2 && downSide < asteroid.y - asteroid.size/2){
        this.lives--;
       this.asteroids.splice(asteroid, 1);      
      }
    });
    }
  }
 

  
  




