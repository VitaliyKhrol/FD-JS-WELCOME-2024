'use strict'

class Stack {
    constructor(maxSize, ...arr) {
        this._maxSize = maxSize;
        this._size = 0;
        for (const i of arr) {
            this.push(i)
        }
    }

    get size() {
        return this._size;
    }

    get isEmpty() {
        return this._size === 0;
    }

    push(value) {

        if (this._size >= this._maxSize) {
            throw new RangeError('Stack overflow')
        } else {
            this[`_${this.size}`] = value;
            this._size++;
            return this._size;
        }
    }

    pop() {
        const lastItem = this[`_${this.size - 1}`];
        delete this[`_${this.size - 1}`];
        this._size--;
        return lastItem;

    }

    pick() {
        return this[`_${this.size - 1}`]
    }
}
