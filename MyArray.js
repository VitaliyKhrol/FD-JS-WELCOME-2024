'use strict'

function fn(a){
    return a*2
}


function MyArray(){
    
    this.lenght =0;

    this.push = function (value){
        this[this.lenght]= value;
        return ++this.lenght;
    }

    this.pop = function(){ 
        const lastItem=this[this.lenght-1];
        delete this[this.lenght-1];
        this.lenght --;
        return lastItem;
    }

    this.forEach = function(fn){
        for (let i = 0; i < this.lenght; i++) {
            fn(this[i],i,this)  
        }
    }

    this.map = function(fn){
        let newArray=new MyArray();
        for (let i = 0; i < this.lenght; i++) {
            newArray.push(fn(this[i])); 
        }
        return newArray;
    }
}
