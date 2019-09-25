const growRate = 1.1;
class binaryNode {
    constructor(key = null, angle = createVector(1), domain = PI, left = null, right = null) {
        this.key = key;
        this.angle = angle;
        this.domain = domain;
        this.leftChild = left;
        this.rightChild = right;
    }
    set left(key = null) {
        const newAngle = p5.Vector.mult(this.angle, HALF_PI / this.domain);
        newAngle.rotate(+ this.domain / 2);
        this.leftChild = new binaryNode(key, newAngle, this.domain / 2);
    }
    get left() {
        return this.leftChild;
    }
    set right(key = null) {
        const newAngle = p5.Vector.mult(this.angle, 1);
        this.rightChild = new binaryNode(key, newAngle, this.domain / 2);
    }
    get right() {
        return this.rightChild;
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
    Draw(parent, mag) {
        push();
        const x0 = parent.x;
        const y0 = parent.y;
        const lineVector = p5.Vector.mult(this.angle, mag);
        const endHere = p5.Vector.add(parent, lineVector);
        const x1 = endHere.x;
        const y1 = endHere.y;
        if (this.leftChild) { this.left.Draw(endHere, mag); }
        if (this.rightChild) { this.right.Draw(endHere, mag); }
        stroke(0);
        line(x0, y0, x1, y1);
        const tl = (this.key).toString().length;
        stroke(0)
        fill(220);
        rect(x1 - 2, y1 + 1, tl * 10, 15);
        fill(0);
        stroke(0, 0, 0, 0);
        textFont('courier');
        text(this.key, x1, y1 + 13);
        pop();
    }
}

function createBinaryNode(list, angle = createVector(0, 20), domain = PI) {
    const ret = new binaryNode(list[0], angle, domain);
    for (let index = 1; index < list.length; index++) {
        const element = list[index];
        ret.Add(element);
    }
    return ret;
}