
const mainElement = document.querySelector('main');

function build(elementAdd){
  mainElement.innerHTML = elementAdd;
  return mainElement;
}

 //window.addEventListener("load", buildIntroScreen());

function buildIntroScreen(){
  const introScreen =  build(
    '<section id = "Intro" ><h1>A-Void</h1> <p>Your star has left you because she apparently needs more Space. Travel through the void to find a new one!!</p><div><button id = "startButton"><span>START JOURNEY<span> </button><div></section>');
    const StartButton = document.getElementById("startButton");
  StartButton.addEventListener("click", buildGameScreen);
}

function buildGameScreen(){
  const  gameScreen = build('<canvas id = "canvas" ></canvas>');
  let timer = 60; // change to 60
  setInterval(function(){
   --timer;
   if(timer === 0){
      buildWinScreen();
      clearInterval;
    }
   },1000);  
   
   const canvas = document.getElementById("canvas");
   
   let game = new Game(canvas);

   game.startLoop();

   document.addEventListener("keydown", function(event){
    switch (event.keyCode){
      case 37:
        game.planet.speedX = -2;
      break;
      case 38:
        game.planet.speedY = -2;
      break;
      case 39:
      game.planet.speedX = 2;
      break;
      case 40:
      game.planet.speedY = 2;
      break;
    } 
    })

  document.addEventListener("keyup", function(event){
    if (event.keyCode === 37 || event.keyCode === 39){
      game.planet.speedX = 0;
    }else if(event.keyCode === 38 || event.keyCode === 40)
      game.planet.speedY = 0;
    }) 
   }


function buildDeathSCreen(){


}
function buildWinScreen(){
  const  winScreen = build('<section id = "win"><h1>YOU SURVIVED!</h1> <p>You have found a new star! Shinier and bigger than the old one</p><div><button id = "main-menu"><span>MENU<span> </button><div></section>');
  const mainMenuButton = document.getElementById("main-menu");
 mainMenuButton.addEventListener("click", buildIntroScreen);
}

buildIntroScreen()