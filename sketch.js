let b;
let m = 1;
let xOff = 0;
let yOff = 0;


function setup() {
  // const list = [
  //   43, 61, 76, 80, 58, 79, 85, 20, 81, 92, 64, 68, 46, 37, 36, 69, 96, 40, 59, 30, 9, 7, 42, 75, 55, 31, 56, 45, 48, 33, 54, 38, 70, 13, 51, 98, 84, 22, 35, 50, 47, 3, 8, 28, 0, 19, 52, 4, 29, 73, 32, 67, 49, 97, 62, 26, 10, 6, 21, 82, 63, 5, 23, 90, 66, 72, 44, 16, 53, 27, 94, 39, 83, 24, 18, 12, 25, 14, 17, 71, 87, 41, 11, 99, 95, 65, 60, 2, 34, 89, 77, 57, 91, 1, 86, 88, 74, 93, 78, 15
  // ]
  // print(makeList());
  const list = makeList(5);
  const a = createVector(50);
  a.rotate(HALF_PI);
  b = createBinaryNode(list, a, PI);
  createCanvas(1600, 900);
  stroke(0);
  fill(220);
  xOff = 0;
  yOff = 0;

}

function draw() {
  background(220);
  const zoom = Math.pow(2, m);
  const o = createVector(xOff, yOff);
  const c = createVector(width / 2, height / 2);
  o.mult(zoom);
  c.sub(o);
  if (mouseIsPressed) {
    xOff += (pmouseX - mouseX) / zoom;
    yOff += (pmouseY - mouseY) / zoom;
    // print(o, c, zoom)
  }
  b.Draw(c, zoom);
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
function mouseWheel(event) {
  m -= event.delta / 1000;
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
  print(ret);
  ret.reverse();
  return ret.flat();
}