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

const display = document.querySelector('#displayText');
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const decimal = document.querySelector('#decimal');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const slash = document.querySelector('#slash');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

function numberButton(num) {
    if (display.textContent === '0') {
        display.textContent = num;  // replace '0' with the number
    } else {
        display.textContent += num;
    }
}

zero.addEventListener("click", () => numberButton ('0'));
one.addEventListener("click", () => numberButton ('1'));
two.addEventListener("click", () => numberButton ('2'));
three.addEventListener("click", () => numberButton ('3'));
four.addEventListener("click", () => numberButton ('4'));
five.addEventListener("click", () => numberButton ('5'));
six.addEventListener("click", () => numberButton ('6'));
seven.addEventListener("click", () => numberButton ('7'));
eight.addEventListener("click", () => numberButton ('8'));
nine.addEventListener("click", () => numberButton ('9'));