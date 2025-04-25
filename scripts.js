let num1;
let num2;
let operator;

function add(a,b) {
    return a+b;
};

function subtract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(x,op,y) {
    if (op === '+') {
        return add(x,y)};
    if (op === '-') {
        return subtract(x,y)};
    if (op === '*') {
        return multiply(x,y)};
    if (op === '/') {
        return divide(x,y)};
}