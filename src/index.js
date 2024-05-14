


class Queue {
    constructor(...arr){
        this._head =0;
        this._tail=0;

        for (const i of arr) {
            this.enqueue(i);
        }
    }

    get size(){
        return this._tail-this._head;

    }

    enqueue(valve){
        if (this.size === 0){
            this[`_${this._head}`] = valve;
        }
        this[`_${this._tail}`]= valve;
        this._tail++;

        return this.size;
    }

    dequeue(){
        if (this.size){
            const firstItem = this[`_${this._head}`];
            delete this[`_${this._head}`];
            this._head++;
            return firstItem;
        }
    }
}


const q1 = new Queue(1,3,5,7)
const q2 = new Queue (2,4,6,8,10,12)

function mergeQueues(q1,q2){
    const qq= new Queue();
    while(q1.size || q2.size){
        qq.enqueue(q1.dequeue());
        qq.enqueue(q2.dequeue());
    }
    
    return qq;
}


