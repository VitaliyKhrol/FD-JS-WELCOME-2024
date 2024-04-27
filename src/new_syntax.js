
class MyNewArray {
    constructor() {
        this.length = 0;
    }
    push() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    }

    pop() {
        const lastItem = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return lastItem;
    }

    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            fn(this[i], i, this)
        }
    }

    map(fn) {
        let newArray = new MyArray();
        for (let i = 0; i < this.length; i++) {
            newArray.push(fn(this[i]));
        }
        return newArray;
    }

}


const mnarr = new MyNewArray();