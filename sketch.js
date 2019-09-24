let b;
let o;


function setup() {
  b = new binaryNode(5, createVector(15), HALF_PI);
  b.left = 1;
  b.right = 8;
  b.left.left = 0;
  b.left.right = 3;
  b.left.right.left = 2;
  b.left.right.right = 4;

  createCanvas(800, 600);
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