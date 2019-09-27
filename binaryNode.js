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
    Draw(origin, magnification = 1, dColor = 0, domain = PI, bias = 0, angle = createVector(10), child = false) {

        const biasR = map(clamp(bias, 0, 1), 0, 1, -.5, .5);
        // print(biasR);

        const lineVector = p5.Vector.mult(angle, magnification * child);
        const endHere = p5.Vector.add(origin, lineVector);

        if (this.left) {
            const a = p5.Vector.mult(angle, 2);
            a.rotate(-domain / 4);
            // a.rotate(domain * biasR)
            this.left.Draw(endHere, magnification, color(255, 0, 0), domain / 2, biasR, a, true);
        }
        if (this.right) {
            const a = p5.Vector.mult(angle, 2);
            a.rotate(domain / 4);
            // a.rotate(domain * biasR)
            this.right.Draw(endHere, magnification, color(0, 0, 255), domain / 2, biasR, a, true);
        }

        push();
        const x0 = origin.x;
        const y0 = origin.y;
        const x1 = endHere.x;
        const y1 = endHere.y;
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
        return endHere;
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