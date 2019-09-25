let b;
let o;


function setup() {
  const list = [5, 1, 8, 10, 9, 7, 6, 0, 3, 2, 4]
  b = createBinaryNode(list, createVector(15), HALF_PI);
  createCanvas(1600, 900);
  o = createVector(5, height / 2);
  stroke(0);
  fill(220);
}

function draw() {
  background(220);
  b.Draw(o);
  noLoop();
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}