'use strict'



function factorial(number) {
    // debugger;
    if (number === 1) {
        return 1;
    }
    return number * factorial(number - 1);

}

factorial(5);


function pow(base, power) {
    if (power === 1) {
        return base;
    }
    return base * pow(base, power - 1)
}


const pow2 = (base, power) => (power === 1) ? base : base * pow2(base, power - 1);

const array1 = [1, 2, 3, 4, 5]

const array = [2, 3, 2, 1, [4, 2, 3, [6, 3, 2, [3], 3, 3], 2]]

function sumMasiv(array) {
    // debugger;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i])) {
            sum += array[i];
        } else sum += sumMasiv(array[i])
    }
    return sum;
}



function fn(n) {
    debugger;
    if (n === 0) {
        return 0;
    }
    if (n === 2 || n === 1) {
        return 1;
    }
    return fn(n - 1) + fn(n - 2);
    }
    for (let i = 0; i<10; i++){
        console.log(fn(i));
    }

