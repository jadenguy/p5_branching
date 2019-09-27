let b;
let m = -1;
let r;
let d;
let mDelta = 0;
let xOff = 0;
let yOff = 0;


function setup() {
  b = createBinaryNode(makeList(7));
  // b = createBinaryNode([1,2,3,4,5,6,7]);
  createCanvas(windowWidth, windowHeight - 4);
  background(220);
  stroke(220);
  r = 0;
  d = PI;
  fill(0);
  xOff = 0;
  yOff = 0;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 4);
  background(220);
}
function draw() {

  background(220);
  if (frameCount % 60 == 0) {
    // background(220);
    // if (r = 0) { r = 1; } else { r = 0; }
  }
  const preR = map(Math.sin(frameCount / 30), -1, 1, 0, 1);
  r = preR;
  // r = round(preR * 4) / 4;
  // d = map(int(frameCount / 120) % 10, 0,9, PI, TWO_PI);
  stroke(0);
  fill(220);
  rect(0, 0, 250, 150);
  stroke(220);
  fill(0);
  text("bias: " + r, 50, 50);
  text("domain: " + d, 50, 100);
  const o = createVector(xOff, yOff);
  const c = createVector(width / 2, height / 2);
  if (mDelta != 0) {
    m += mDelta;
    background(220);
  }
  const zoom = Math.pow(2, m) * (width * width + height * height) / (600 * 600 + 800 * 800);
  if (mouseIsPressed) {
    xOff += (pmouseX - mouseX) / zoom;
    yOff += (pmouseY - mouseY) / zoom;
  }
  o.mult(zoom);
  c.sub(o);
  // if (frameCount % 30  == 0) { 
  b.Draw(c, zoom, color(0), d, r, createVector(-10));
  // }
  mDelta = 0;

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