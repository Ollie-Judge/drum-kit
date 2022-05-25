var drumBtns = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumBtns; i++)
  document.querySelectorAll(".drum")[i].addEventListener("click", () => {
    alert("clicked");
  });

document.addEventListener("keypress", (event) => {
  playSound(event.key);
});

function playSound(key) {
  switch (key) {
    case "q":
      var tom1 = new Audio("assets/sounds/tom-1.mp3");
      tom1.play();
      break;

    case "w":
      var tom2 = new Audio("assets/sounds/tom-2.mp3");
      tom2.play();
      break;

    case "e":
      var tom3 = new Audio("assets/sounds/tom-3.mp3");
      tom3.play();
      break;

    case "r":
      var tom4 = new Audio("assets/sounds/tom-4.mp3");
      tom4.play();
      break;

    case "t":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "y":
      var crash = new Audio("assets/sounds/snare.mp3");
      crash.play();
      break;

    case "u":
      var kick = new Audio("assets/sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}
