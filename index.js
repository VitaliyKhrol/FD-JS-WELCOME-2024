

// function factorial(n) {
//     // debugger;
//     let factor = 1;
//     for (let i = 1; i <= n; i++) {
//         factor = factor * i;
//     }
//     console.log(factor)
// }

// factorial(5);


// function pow(bace, power) {
//     // debugger;
//     let j = bace;
//     for (let i = 1; i < power; i++) {
//         j = j * bace;
//     }
//     console.log(j)
// }

// pow(5, 3)

// function square(a, b) {
//     return a * b;
// }



function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if ((i % 5 === 0) && (i % 3 === 0)) {
            console.log('FizzBuzz')
        }
        else if (i % 5 === 0) {
            console.log('Buzz')
        }
        else if (i % 3 === 0) {
            console.log('Fizz')
        }
        else (
            console.log(i)
        )
    }
}


fizzBuzz(100)