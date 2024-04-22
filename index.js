
'use strict'

const obj={
    key:'value',
    testMethod: test
}

function test(){
    console.log(this);
}

const arrowFunction = (a,b) => a*b;

obj.testMethod();
arrowFunction(4,5);