
'use strict'

function sumOfAllArguments() {
    let sum = 0;
    console.log(arguments)
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum;
}


