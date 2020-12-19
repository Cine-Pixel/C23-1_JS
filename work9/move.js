const box = document.getElementById("box");
box.style.left = "0px";
box.style.top = "0px";

const move = (e) => {
  console.log(e.key);
  switch (e.key) {
    case "ArrowRight":
      box.style.left = parseInt(box.style.left) + 10 + "px";
      break;
    case "ArrowLeft":
      box.style.left = parseInt(box.style.left) - 10 + "px";
      break;
    case "ArrowDown":
      box.style.top = parseInt(box.style.top) + 10 + "px";
      break;
    case "ArrowUp":
      box.style.top = parseInt(box.style.top) - 10 + "px";
      break;
    default:
      return;
  }
};

document.addEventListener("keydown", move);
