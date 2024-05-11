'use strict'


class ListItem {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
    get value() {
        return this._value
    }

    set value(v) {
        this._value = v;
    }
}

class LinkedList {
    constructor(...args) {
        this.length = 0;
        this.head = null;
        this.tail = null;

        for (const i of args) {
            this.push(i)

        }

    }

    push(v) {
        const newItem = new ListItem(v);
        if (this.length === 0) {
            this.head = newItem;
            this.tail = newItem;
        } else {
            this.tail.next = newItem
            newItem.prev = this.tail;
            this.tail = newItem;
        }
        return ++this.length;

    }

    deleteHeadElement() {
        const nextElement = this.head.next;
        const prevElement = null;
        this.head = nextElement;
        this.length--;

    }

    deleteTailElement() {
        const prevElement = this.tail.prev;
        prevElement.next = null;
        this.tail= prevElement;
        this.length--;

    }

    deleteElement(value) {
        // debugger;
        for (const item of this) {
            if (item.value === value) {
                const nextElement = item.next;
                const prevElement = item.prev;
                nextElement.prev = prevElement;
                prevElement.next = nextElement;
            }
        }
        this.length--;
    }

    [Symbol.iterator]() {
        return new LinkedListIterator(this)
    }

}

class LinkedListIterator {

    constructor(list) {
        this.list = list;
        this.currentNode = null;
    }


    next() {
        // debugger;
        this.currentNode = this.currentNode ? this.currentNode.next : this.list.head;
        console.log(this.currentNode);
        console.log(this.currentNode.next);

        return {
            value: this.currentNode,
            done: !this.currentNode,

        }
    }
}


const link = new LinkedList(1, 2, 3, 4, 5);
const link1 = new LinkedListIterator(link);

