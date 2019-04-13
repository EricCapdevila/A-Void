
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
  const  gameScreen = build('<canvas></canvas>');
}


function buildDeathSCreen(){


}
function buildWinScreen(){
  

}
buildIntroScreen()