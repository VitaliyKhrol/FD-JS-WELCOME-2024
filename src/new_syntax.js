
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
        let newArray = new MyNewArray();
        for (let i = 0; i < this.length; i++) {
            newArray.push(fn(this[i]));
        }
        return newArray;
    }

    concat(arr2){
        for (let i = 0; i < arr2.length; i++) {
            this.push(arr2[i])
            
        }
        return this;

    }

    flat(){
        const res = new MyNewArray;
        for (let i = 0; i < this.length; i++) {
          if (MyNewArray.isMyNewArray(this[i])){
                res.concat(this[i].flat())
          } else {
            res.push(this[i])
          }
            
        }
        return res;
    }

    static isMyNewArray(obj){
        return obj instanceof MyNewArray;
    }

    reverse(){
        let len = this.length-1;
        // debugger;
        for (let i = 0; i<=len/2; i++) {
            const tmp = this[i];
            this[i]= this[len-i];
            this[len-i]= tmp; 
        }
        return this;
    }
}

const myarr = new MyNewArray();
const myarr1 = new MyNewArray();
myarr1.push(1,2,3,4,5,6,7,8,9);
myarr.push(1,2,3,4,5,myarr1);

