let b;
let m = -5;
let mDelta = 0;
let xOff = 0;
let yOff = 0;


function setup() {
  b = createBinaryNode(makeList(10));
  createCanvas(windowWidth, windowHeight - 4);
  stroke(220);

  fill(0);
  xOff = 0;
  yOff = 0;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 4);
}
function draw() {

  if (frameCount % 10 == 0) {
    r = map(frameCount / 10 % 5, 0, 4, 0, 1);
    d = map(frameCount / 10 % 20, 0, 19, 0, TWO_PI);
    a = 0;
    background(220);
    text(r, 100, 100);
    print(r);
    const o = createVector(xOff, yOff);
    const c = createVector(width / 2, height / 2);
    if (mDelta != 0) {
      m += mDelta;
    }
    const zoom = Math.pow(2, m) * width * height / 600 / 800;
    if (mouseIsPressed) {
      xOff += (pmouseX - mouseX) / zoom;
      yOff += (pmouseY - mouseY) / zoom;
    }
    o.mult(zoom);
    c.sub(o);
    b.Draw(c, zoom);
    // print(c, zoom, color(0), a, d, r);
    mDelta = 0;
  }
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
function mouseWheel(event) {
  const d = map(event.delta, -500, 500, -1, 1);
  mDelta -= d;
  return false;
}
function makeList(len = 0) {
  const ret = [];
  for (let i = 0; i < len; i++) {
    const level = [];
    const root = Math.pow(2, i);
    level.push(root - 1);
    ret.push(level);
    for (let j = 0; j < i; j++) {
      const lastLevel = ret[j];
      const lll = lastLevel.length;
      for (let k = 0; k < lll; k++) {
        const current = lastLevel[k];
        lastLevel.push(current + root);
      }
    }
  }
  ret.reverse();
  return ret.flat();
}