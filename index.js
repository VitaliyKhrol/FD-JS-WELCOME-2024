
let a = prompt('Перше число');
let b = prompt('Друге число');
let c = prompt('+ , - , *, /');

calculator(a, b, c)

function sum(a, b) {
    return (a + b);
}

function sub(a, b) {
    return (a - b);
}

function mult(a, b) {
    return (a * b);
}

function div(a, b) {
    return (a / b);
}

function calculator(a, b, c) {
    switch (c) {
        case '+':
            return sum(a, b);
        case '-':
            return sub(a, b);
        case '*':
            return mult(a, b);
        case '/':
            return div(a, b);
        default:
            return ('Помилка');
    }
}