class Food {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = scale;
    this.h = scale;
  }

  getLocation = () => {
    this.x = Math.floor((Math.random() * canvas.width) / scale) * scale;
    this.y = Math.floor((Math.random() * canvas.height) / scale) * scale;
  };

  draw = () => {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };
}
