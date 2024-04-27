'use strict'

function MyArray(){
    
    this.length =0;
    
}

MyArray.prototype = new MyArrayMetods();


function MyArrayMetods(){

    this.push = function (){
        for (let i= 0; i< arguments.length; i++) {
          this[this.length]= arguments[i];
          this.length++;
        }
        return this.length;
    }

    this.pop = function(){ 
        const lastItem=this[this.length-1];
        delete this[this.length-1];
        this.length --;
        return lastItem;
    }

    this.forEach = function(callback){
        for (let i = 0; i < this.length; i++) {
            fn(this[i],i,this)  
        }
    }

    this.map = function(fn){
        let newArray=new MyArray();
        for (let i = 0; i < this.length; i++) {
            newArray.push(fn(this[i])); 
        }
        return newArray;
    }

}