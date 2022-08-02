for (var i = 0;i<document.querySelectorAll("button").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key){
  switch(key){
    case "A":
    var audio = new Audio("sounds/key01.ogg");
    audio.play();
    break;

    case "B":
    var audio = new Audio("sounds/key02.ogg");
    audio.play();
    break;

    case "C":
    var audio = new Audio("sounds/key03.ogg");
    audio.play();
    break;

    case "D":
    var audio = new Audio("sounds/key04.ogg");
    audio.play();
    break;

    case "E":
    var audio = new Audio("sounds/key05.ogg");
    audio.play();
    break;

    case "F":
    var audio = new Audio("sounds/key06.ogg");
    audio.play();
    break;

    case "G":
    var audio = new Audio("sounds/key07.ogg");
    audio.play();

    default:
    console.log(buttonInnerHTML);
  }
}


function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
