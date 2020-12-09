//------------------------------General stuff------------------------------
let step, finish, direction;

const square = document.getElementById("square");
square.style.left = 0 + "px";
square.style.top = 0 + "px";

square.style.width = 50 + "px";
square.style.height = 50 + "px";

//------------------------------Task 1------------------------------
const makeMove = (e) => {
  console.log(e.target.value);
  if (e.target.value === "b") {
    direction = "top";
    step = 10;
    finish = 440;
  } else if (e.target.value === "u") {
    direction = "top";
    step = -10;
    finish = 10;
  } else if (e.target.value === "l") {
    direction = "left";
    step = -10;
    finish = 10;
  } else if (e.target.value === "r") {
    direction = "left";
    step = 10;
    finish = 840;
  }
  const move = setInterval(() => {
    if (parseInt(square.style[direction]) === finish) {
      clearInterval(move);
    }
    square.style[direction] = parseInt(square.style[direction]) + step + "px";
  }, 100);
};

const buttons = document.getElementsByClassName("controls")[0].childNodes;
buttons.forEach((button) => {
  button.addEventListener("click", makeMove);
});

//------------------------------Task 1------------------------------
const keyMove = (e) => {
  console.log(e.keyCode);
  if (square.style.width === "900px" || square.style.height === "500px") return;

  switch (e.keyCode) {
    case 39:
      square.style.width = parseInt(square.style.width) + 10 + "px";
      break;
    case 37:
      square.style.width = parseInt(square.style.width) - 10 + "px";
      break;
    case 38:
      square.style.height = parseInt(square.style.height) - 10 + "px";
      break;
    case 40:
      square.style.height = parseInt(square.style.height) + 10 + "px";
      break;
  }
};

window.addEventListener("keydown", keyMove);
