const canvas = document.getElementById("canvas");
canvas.width = 1000;
canvas.height = 600;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(200, centerY / 2, 120, 0, Math.PI * 2);
ctx.moveTo(160, centerY / 2 - 50);
ctx.arc(150, centerY / 2 - 50, 10, 0, Math.PI * 2);
ctx.moveTo(260, centerY / 2 - 50);
ctx.arc(250, centerY / 2 - 50, 10, 0, Math.PI * 2);
ctx.moveTo(290, centerY / 2);
ctx.arc(200, centerY / 2, 90, 0, Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(500, centerY / 2, 120, 0, Math.PI * 2);
ctx.moveTo(460, centerY / 2 - 50);
ctx.arc(450, centerY / 2 - 50, 10, 0, Math.PI * 2);
ctx.moveTo(560, centerY / 2 - 50);
ctx.arc(550, centerY / 2 - 50, 10, 0, Math.PI * 2);
ctx.moveTo(570, centerY / 2 + 50);
ctx.arc(500, centerY / 2 + 50, 70, 0, Math.PI, true);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(800, centerY / 2, 120, 0, Math.PI * 2);
ctx.moveTo(760, centerY / 2 - 50);
ctx.arc(750, centerY / 2 - 50, 10, 0, Math.PI * 2);
ctx.moveTo(860, centerY / 2 - 50, 10, 0, Math.PI * 2);
ctx.arc(850, centerY / 2 - 50, 10, 0, Math.PI * 2);
ctx.moveTo(800 + 40, centerY / 2 + 40);
ctx.arc(800, centerY / 2 + 40, 40, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(350, (centerY * 3) / 2, 120, 0, Math.PI * 2);
ctx.moveTo(310, (centerY * 3) / 2 - 50);
ctx.arc(300, (centerY * 3) / 2 - 50, 10, 0, Math.PI * 2);
ctx.moveTo(310, (centerY * 3) / 2 - 65);
ctx.lineTo(290, (centerY * 3) / 2 - 65);
ctx.moveTo(410, (centerY * 3) / 2 - 50);
ctx.arc(400, (centerY * 3) / 2 - 50, 10, 0, Math.PI * 2);
ctx.moveTo(410, (centerY * 3) / 2 - 70);
ctx.lineTo(390, (centerY * 3) / 2 - 75);
ctx.moveTo(400, (centerY * 3) / 2 + 30);
ctx.lineTo(300, (centerY * 3) / 2 + 30);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(700, (centerY * 3) / 2, 120, 0, Math.PI * 2);
ctx.moveTo(660, (centerY * 3) / 2 + 50);
ctx.arc(650, (centerY * 3) / 2 + 50, 10, 0, Math.PI * 2);
ctx.moveTo(760, (centerY * 3) / 2 + 50);
ctx.arc(750, (centerY * 3) / 2 + 50, 10, 0, Math.PI * 2);
ctx.moveTo(770, (centerY * 3) / 2 - 20);
ctx.arc(700, (centerY * 3) / 2 - 20, 70, 0, Math.PI, true);
ctx.stroke();
ctx.closePath();
