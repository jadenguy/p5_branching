let b;
let o;


function setup() {
  b = new binaryNode(5);
  b.left = 1;
  b.right = 8;
  b.left.left = 0;
  b.left.right = 3;
  b.left.right.left = 2;
  b.left.right.right = 4;

  createCanvas(400, 400);
  o = createVector(width / 2, 50);
}

function draw() {
  background(220);
  b.Draw(o);
  noLoop();
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}