let b;
let m = 1;
let mDelta = 0;
let xOff = 0;
let yOff = 0;


function setup() {
  const list = makeList(10);
  const a = createVector(10);
  // a.rotate(HALF_PI);
  b = createBinaryNode(list, a, TWO_PI);
  createCanvas(1600, 900);
  stroke(0);
  fill(220);
  xOff = 0;
  yOff = 0;
  // noLoop();
}

function draw() {
  background(220);
  const o = createVector(xOff, yOff);
  const c = createVector(width / 2, height / 2);
  if (mDelta != 0) {
    // const m = createVector(mouseX, mouseY);
    // m.sub(c);
    // m.mult(zoom);
    // o.sub(m);
    m += mDelta;
  }
  const zoom = Math.pow(2, m);
  if (mouseIsPressed) {
    xOff += (pmouseX - mouseX) / zoom;
    yOff += (pmouseY - mouseY) / zoom;
  }
  o.mult(zoom);
  c.sub(o);
  // print("drawing");
  b.Draw(c, zoom);
  mDelta = 0;
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
function mouseWheel(event) {
  mDelta = -event.delta / 1000;
  return false;
  // redraw();
}
// function mousePressed() {
//   // x += 1;
//   redraw();
// }
function makeList(len = 0) {
  const ret = [];
  for (let i = 0; i < len; i++) {
    const level = [];
    const root = Math.pow(2, i);
    level.push(root - 1);
    ret.push(level);
    for (let j = 0; j < i; j++) {
      const lastLevel = ret[j];
      for (let k = 0; k < lastLevel.length; k++) {
        const current = lastLevel[k];
        lastLevel.push(current + root);
      }
    }
  }
  ret.reverse();
  return ret.flat();
}