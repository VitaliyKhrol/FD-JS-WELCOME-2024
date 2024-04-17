'use strict'

const user1 ={
    firstName:'Alex',
    lastName:'Grow',
    age:15,
    getFullName: function(){
        console.log (this.firstName + this.lastName)
    }
   
}

const user2 ={
    firstName:'Jonh',
    lastName:'Dow',
    age:25,
    getFullName: function(){
        console.log (this.firstName + this.lastName)
    }
}


function fn(){
    console.log(this)
}

console.log(this)