const canvas = document.getElementById("canvas");
const scale = canvas.width / 20;

const ctx = canvas.getContext("2d");

let frame = 0;
let gameOver = false;

const snake = new Snake(10 * scale, 10 * scale, scale, scale);
const food = new Food();
food.getLocation();

const play = () => {
  if (gameOver) {
    console.log("game over");
    window.cancelAnimationFrame(play);
    ctx.fillStyle = "red";
    ctx.font = "60px serif";
    ctx.fillText("Game Over", canvas.width / 3.5, canvas.height / 2);
    return;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.draw();
  snake.update(frame);
  food.draw();

  ctx.fillText("Score: " + snake.total, 550, 20);

  if (snake.eat(food)) food.getLocation();

  frame++;
  window.requestAnimationFrame(play);
};

window.addEventListener("keydown", (event) => {
  snake.move(event.key.replace("Arrow", ""));
});

play();
