const canvas = document.getElementById('draw');
const context = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

context.lineJoin = 'round';
context.lineCap = 'round';

// context.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0, lastY = 0;
let hue = 0;

let lineWidth = 5;
let direction = true;

function draw(e) {
  if (!isDrawing) return;

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue++;
  if (hue > 360) hue = 0;

  context.lineWidth = lineWidth;
  direction ? lineWidth++ : lineWidth--;
  if (lineWidth > 50 || lineWidth < 5) direction = !direction;

  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
