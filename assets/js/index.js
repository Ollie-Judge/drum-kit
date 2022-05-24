var drumBtns = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumBtns; i++)
  document.querySelectorAll(".drum")[i].addEventListener("click", () => {
    alert("clicked");
  });
