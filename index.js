
'use strict'


function drawSquare(dimension) {

    let square = '';
    for (let i = 0; i <= dimension; i++) {
        for (let j = 0; j <= dimension; j++) {
            if (i === 0 || i === dimension || j === 0 || j === dimension || (dimension-i) === j) {
                square += '*';
            } else { square += ' ' }
        }
        square += '\n'
    }
    console.log(square)
}

drawSquare(20)
