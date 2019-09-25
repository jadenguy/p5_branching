let b;
let o;
let mag = 1;
let x = 0;
let y = 0;


function setup() {
  const list = [
    43, 61, 76, 80, 58, 79, 85, 20, 81, 92, 64, 68, 46, 37, 36, 69, 96, 40, 59, 30, 9, 7, 42, 75, 55, 31, 56, 45, 48, 33, 54, 38, 70, 13, 51, 98, 84, 22, 35, 50, 47, 3, 8, 28, 0, 19, 52, 4, 29, 73, 32, 67, 49, 97, 62, 26, 10, 6, 21, 82, 63, 5, 23, 90, 66, 72, 44, 16, 53, 27, 94, 39, 83, 24, 18, 12, 25, 14, 17, 71, 87, 41, 11, 99, 95, 65, 60, 2, 34, 89, 77, 57, 91, 1, 86, 88, 74, 93, 78, 15
  ]
  b = createBinaryNode(list, createVector(1), HALF_PI);
  createCanvas(1600, 900);
  stroke(0);
  fill(220);
  // mag = createSlider(1, 10000, 400);
}

function draw() {
  background(220);
  if (mouseIsPressed) {
    x += mouseX - pmouseX;
    y += mouseY - pmouseY;
  }
  const zoom = Math.pow(2,mag);
  const o = createVector(x - zoom, y);
  b.Draw(o, zoom);
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
function mouseWheel(event) {
  print(event.delta);
  mag -= event.delta / 1000;  
  return false;
}