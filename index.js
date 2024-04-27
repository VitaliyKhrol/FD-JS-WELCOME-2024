'use strict'

/**
 * @param {String} name - Hame to say Hello;
 * @returns {undefined} - 
 */


function sayHallo(name) {
    if (typeof name !== 'string') {
        throw new TypeError('Name mast be a string');
    }
    console.log(`Hello, ${name}`);
}


function pow(base, power) {
    // debugger;
    if (typeof base !== "number" || typeof power !== "number" ) {
        throw new TypeError('Number and power mast be a number');
    }
    if (power <= 0) {
        throw new RangeError('Power must be more than 0');
    } 
        let res = 1;
        for (let i = 0; i < power; i++) {
            res = base * res;

        }
        return res;
    }

pow('e', 4)