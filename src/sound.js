function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

function playLose(){
  let impact = new sound("./material/lose.mp3");
  impact.play();
}

function playImpact(){
  let impact = new sound("./material/impact.mp3");
  impact.play();
}

function playStar(){
  let impact = new sound("./material/star.mp3");
  impact.play();
}
