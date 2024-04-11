

function square(b) {
    return b*b;
}

function superFunction(number, fn) { // функція вищого порядку (High Order Function - HOF)
    
    fn(number);  // callback - функція зворотного виклику

}

superFunction (5, square);