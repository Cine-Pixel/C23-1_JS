const canvas = document.getElementById("canvas");
const scale = canvas.width / 8;

const ctx = canvas.getContext("2d");

const drawRect = (x, y, w, h) => {
  ctx.fillStyle = "#774726";
  ctx.fillRect(x, y, w, h);
};

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (i % 2 !== j % 2) drawRect(i * scale, j * scale, scale, scale);
  }
}
