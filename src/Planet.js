
class Planet{
  constructor(canvas,array){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.radius = 15;
    this.lives = 3;
    this.x = 150;
    this.y = 150/2;
    this.speedX = 0;
    this.speedY = 0;
    this.asteroids = array; 
  }

  draw(){
    //this.ctx.fillStyle = 'green';
    //this.ctx.fillRect(this.x - this.radius/2, this.y-this.radius/2, this.radius, this.radius);
    let planet = new Image(15, 15);
    planet.src = '/material/planetSprite.png';
    this.ctx.drawImage(planet, this.x - this.radius/2, this.y - this.radius/2, this.radius, this.radius);

  }
  move(){
    if(this.x > this.canvas.width-this.radius){
      this.x = this.canvas.width-this.radius;
    }else if(this.x < 0){
      this.x = 0;
    }else{
      this.x = this.x + this.speedX;
    }
    if(this.y > this.canvas.height - this.radius){
      this.y--
    }else if(this.y < 0){
      this.y = 0;
    }else{
      this.y = this.y + this.speedY;
    }
  }
  collision(){
    let leftSide = this.x -this.radius/2;
    let topSide = this.y - this.radius/2;
    let rightSide = this.x + this.radius/2;
    let downSide = this.y + this.radius/2;


       
    this.asteroids.forEach((asteroid,index)=>{
      //console.log(leftSide < asteroid.x + asteroid.radius/2 && rightSide > asteroid.x - asteroid.radius/2)
      //console.log(topSide > asteroid.y + asteroid.radius/2 && downSide < asteroid.y - asteroid.radius/2)
      const distance = Math.sqrt((this.x - asteroid.x)**2+(this.y-asteroid.y)**2)
    

      if(distance < this.radius/2+asteroid.radius/2){
        this.lives--;
        console.log(this.asteroids) 
       this.asteroids.splice(asteroid, 1);  
       console.log(this.asteroids)    
      }
    });
    }
  }
 

  
  




