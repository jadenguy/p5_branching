class binaryNode {
    constructor(value = null, left = null, right = null, angle = createVector(0, 10)) {
        this.value = value;
        this.leftChild = left;
        this.rightChild = right;
        this.angle = angle;
    }
    set left(value = null) { ; }
    get left() { return this.leftChild }
    Draw(parent) {
        push();
        const x0 = parent.angle.x;
        const y0 = parent.angle.y;
        const newAngle = p5.Vector.add(parent.angle, this.angle);
        const x1 = newAngle.x;
        const y1 = newAngle.y;
        line(x0, y0, x1, y1);
        pop();
    }
}