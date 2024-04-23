
'use strict'

function sum (a,b, ...array) {
    console.log(a);
    console.log(b);
    console.log(array);

}

// sum(1,2,3,4,5,6,7,8,9)

const sumOfArguments = (...array)=>
    array.reduce((accumulator, currentValue)=> accumulator + currentValue
    ,0 );



// console.log (sumOfArguments(1,2,3,4,5,6,7,8))


function sum1(a,b,c){
    return a+b+c;
}

const numbers =[1,2,3,4,5,-1]


const numbers1 = [...numbers];