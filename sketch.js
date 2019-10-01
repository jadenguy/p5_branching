let b, d;
let m = -1;
let r = .5;
let dOffset = 0;
let mDelta = 0;
let xOff = 0;
let yOff = 0;
let refreshAverage = 1;
let frameCycle = 30;
function setup() {
  b = createBinaryNode(makeList(9));
  createCanvas(windowWidth, windowHeight - 4);
  background(220);
  stroke(220);
  d = PI;
  fill(0);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 4);
  background(220);
}
function draw() {
  sway(frameCycle, false);
  const zoom = Math.pow(2, m) * (width * width + height * height) / (600 * 600 + 800 * 800);
  if (mouseIsPressed) {
    xOff += (pmouseX - mouseX) / zoom;
    yOff += (pmouseY - mouseY) / zoom;
    background(220);
  }
  background(220);
  printStatus();
  const o = createVector(xOff, yOff);
  const c = createVector(width / 2, height / 2);
  if (mDelta != 0) {
    m += mDelta;
    background(220);
  }
  o.mult(zoom);
  c.sub(o);
  b.Draw(c, zoom, color(0), d, r, createVector(10));
  mDelta = 0;
}
function printStatus() {
  push();
  stroke(0);
  fill(220);
  rect(0, 0, 250, 200);
  stroke(220);
  fill(0);
  text("bias: " + r, 50, 50);
  text("domain: " + d * 4 / PI + "/4 pi", 50, 100);
  refreshAverage = (refreshAverage * 9 + frameRate() / 60) / 10;
  text("framerate: " + round(refreshAverage * 10) * 10 + "%", 50, 150);
  pop();
}
function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
function mouseWheel(event) {
  const wheel = map(event.delta, -500, 500, -1, 1);
  mDelta -= wheel;
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
function sway(cycle = 30., grow = false) {
  r = map(Math.sin(frameCount / cycle * PI), -1, 1, 0, 1);
  if (grow && ((frameCount - 1) / 2) % cycle == 0) {
    background(220);
    dOffset = dOffset % 8;
    d = map(int(dOffset) % 8, 0, 7, QUARTER_PI, TWO_PI);
    dOffset++;
  }
}