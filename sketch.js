let b;
let o;


function setup() {
  b = new binaryNode(5);
  b.left = new binaryNode(1);
  b.rightChild = new binaryNode(8);
  createCanvas(400, 400);
  o = { angle: createVector(width / 2, 50) };
}

function draw() {
  background(220);
  b.Draw(o);
  noLoop();
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}