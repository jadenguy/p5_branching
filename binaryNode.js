const growRate = 2;
class binaryNode {
    constructor(key = null, angle = createVector(1), domain = PI) {
        this.key = key;
        this.angle = angle;
        this.domain = domain;
        this._left = null;
        this._right = null;
    }
    set left(key = null) {
        const lMult = growRate;
        const newAngle = p5.Vector.mult(this.angle, lMult);
        newAngle.rotate(this.domain / 4);
        newAngle.rotate(this.domain / 4);
        this._left = new binaryNode(key, newAngle, this.domain / 2);
    }
    get left() {
        return this._left;
    }
    set right(key = null) {
        const rMult = growRate;
        const newAngle = p5.Vector.mult(this.angle, rMult);
        // newAngle.rotate(-this.domain / 4);
        // newAngle.rotate(-this.domain / 4);
        this._right = new binaryNode(key, newAngle, this.domain / 2);
    }
    get right() {
        return this._right;
    }
    Add(key) {
        if (key < this.key) {
            if (this.left === null) {
                this.left = key;
            }
            else {
                this.left.Add(key);
            }
        }
        else if (key > this.key) {
            if (this.right === null) {
                this.right = key;
            }
            else {
                this.right.Add(key);
            }
        }
        else {
            console.log("DUPLICATE KEY");
        }
    }
    Draw(parent, mag, dColor = 0) {
        push();
        const x0 = parent.x;
        const y0 = parent.y;
        const lineVector = p5.Vector.mult(this.angle, mag);
        const endHere = p5.Vector.add(parent, lineVector);
        const x1 = endHere.x;
        const y1 = endHere.y;
        let l, r;
        if (this.left) { l = this.left.Draw(endHere, mag, color(255, 0, 0)); }
        if (this.right) { r = this.right.Draw(endHere, mag, color(0, 0, 255)); }
        // if (this.this._left && this.this._right) { print(l.dist(r)); }
        stroke(dColor);
        line(x0, y0, x1, y1);
        const tl = (this.key).toString().length;
        stroke(0)
        fill(220);
        rect(x1 - 2, y1 + 1, tl * 7 + 5, 15);
        fill(0);
        stroke(0, 0, 0, 0);
        textFont('courier');
        text(this.key, x1, y1 + 13);
        pop();
        return createVector(x1, y1)
    }
}

function createBinaryNode(list, angle = createVector(0, 20), domain = PI) {
    const ret = new binaryNode(list[0], angle, domain);
    for (let index = 1; index < list.length; index++) {
        const element = list[index];
        ret.Add(element);
    }
    ret.angle.setMag(0);
    return ret;
}