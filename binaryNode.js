class binaryNode {
    constructor(key = null) {
        this.key = key;
        this._left = null;
        this._right = null;
    }
    set left(key = null) {
        this._left = new binaryNode(key);
    }
    get left() {
        return this._left;
    }
    set right(key = null) {
        this._right = new binaryNode(key);
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
    Draw(parent, mag = 1, dColor = 0, angle = createVector(10), domain = TWO_PI, biasR = 0, child = false) {

        push();
        const x0 = parent.x;
        const y0 = parent.y;
        const lineVector = p5.Vector.mult(angle, mag * child);
        print(lineVector.mag())
        const endHere = p5.Vector.add(parent, lineVector);
        const x1 = endHere.x;
        const y1 = endHere.y;


        if (this.left) {
            const lAngle = p5.Vector.mult(angle, mag);
            lAngle.rotate(domain / 2);
            this.left.Draw(endHere, mag, color(255, 0, 0), lAngle, domain / 2, biasR, true);
        }
        if (this.right) {
            const rAngle = p5.Vector.mult(angle, mag);
            this.right.Draw(endHere, mag, color(0, 0, 255), rAngle, domain / 2, biasR, true);
        }


        stroke(dColor);
        line(x0, y0, x1, y1);
        const tl = (this.key).toString().length;
        stroke(0)
        fill(220);
        rect(x1 + 1, y1 + 1, tl * 7 + 5, 15);
        fill(0);
        stroke(0, 0, 0, 0);
        textFont('courier');
        text(this.key, x1 + 3, y1 + 13);
        pop();
        return createVector(x1, y1)
    }
}

function createBinaryNode(list) {
    const ret = new binaryNode(list[0]);
    for (let index = 1; index < list.length; index++) {
        const element = list[index];
        ret.Add(element);
    }
    return ret;
}