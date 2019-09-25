class binaryNode {
    constructor(value = null, angle = createVector(0, 20), domain = PI, left = null, right = null) {
        this.value = value;
        this.angle = angle;
        this.domain = domain;
        this.leftChild = left;
        this.rightChild = right;
    }
    set left(value = null) {
        const newAngle = p5.Vector.mult(this.angle, 2);
        newAngle.rotate(+ (this.domain / 4));
        this.leftChild = new binaryNode(value, newAngle, this.domain / 2);
    }
    get left() {
        return this.leftChild;
    }
    set right(value = null) {
        const newAngle = p5.Vector.mult(this.angle, 2);
        newAngle.rotate(- (this.domain / 4));
        this.rightChild = new binaryNode(value, newAngle, this.domain / 2);
    }
    get right() {
        return this.rightChild;
    }
    Add(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = value;
            }
            else {
                this.left.Add(value);
            }
        }
        else if (value > this.value) {
            if (this.right === null) {
                this.right = value;
            }
            else {
                this.right.Add(value);
            }
        }
        else {
            console.log("DUPLICATE VALUE");
        }
    }
    Draw(parent) {
        push();
        const x0 = parent.x;
        const y0 = parent.y;
        const endHere = p5.Vector.add(parent, this.angle);
        const x1 = endHere.x;
        const y1 = endHere.y;
        if (this.leftChild) { this.left.Draw(endHere); }
        if (this.rightChild) { this.right.Draw(endHere); }
        stroke(0);
        line(x0, y0, x1, y1);
        const tl = (this.value).toString().length;
        stroke(0)
        fill(220);
        rect(x1, y1, tl * 11, 15);
        fill(0);
        stroke(0, 0, 0, 0);
        text(this.value, x1 + 2, y1 + 13);
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