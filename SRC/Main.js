
const mainElement = document.querySelector('main');

function build(elementAdd){
   mainElement.innerHTML = elementAdd;
   return mainElement;
}

//window.addEventListener("load", buildIntroScreen());


function buildIntroScreen(){
  const introScreen =  build(
    '<section><h1>A-Void</h1> <p>¡¡Your star has left you because she apparently needs more Space. Travel through the void to find a new one!!</p><button id = "startButton"> Start </button></section>');
    const StartButton = document.getElementById("startButton");
  StartButton.addEventListener("click", buildGameScreen);
}

function buildGameScreen(){
  
  console.log("cat");
  const  gameScreen = build('<div class= "time" ></div> <div class = "lives" ></div><canvas></canvas>');
  
}


function buildDeathSCreen(){


}
function buildWinScreen(){
  

}
buildIntroScreen()