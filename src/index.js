class Queue {
    constructor(){
        this._head =0;
        this._tail=0;
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


