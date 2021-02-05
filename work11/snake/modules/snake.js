class Snake {
  constructor(x, y, wh) {
    this.x = x;
    this.y = y;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.w = wh;
    this.h = wh;
    this.total = 0;
    this.tail = [];
  }

  draw = () => {
    ctx.fillStyle = "green";
    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, this.w, this.h);
    }
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };

  update = (frame) => {
    if (frame % 5 === 0) {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
      this.tail[this.total - 1] = { x: this.x, y: this.y };
    }

    if (this.x > canvas.width) gameOver = true;
    if (this.x < 0) gameOver = true;
    if (this.y > canvas.height) gameOver = true;
    if (this.y < 0) this.y = gameOver = true;
  };

  move = (direction) => {
    switch (direction) {
      case "Up":
        this.xSpeed = 0;
        this.ySpeed = -scale;
        break;
      case "Down":
        this.xSpeed = 0;
        this.ySpeed = scale;
        break;
      case "Left":
        this.xSpeed = -scale;
        this.ySpeed = 0;
        break;
      case "Right":
        this.xSpeed = scale;
        this.ySpeed = 0;
        break;
    }
  };

  eat = (food) => {
    if (this.x === food.x && this.y === food.y) {
      this.total++;
      return true;
    }
    return false;
  };
}
