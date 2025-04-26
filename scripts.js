let num1 = null;
let num2 = null;
let operator = null;
let shouldResetDisplay = false;

function add(a,b) {
    return +a + +b;
};

function subtract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b === '0') {return "you fool. you absolute buffoon. you think you can challenge me in my own realm? you think you can rebel against my authority? you dare come into my house and upturn my dining chairs and spill coffee grinds in my Keurig? you thought you were safe in your chain mail armor behind that screen of yours. I will take these laminate wood floor boards and destroy you. I didn't want war, but I didn't start it."};
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
    if (shouldResetDisplay || display.textContent === '0') {
        display.textContent = num;
        shouldResetDisplay = false;  // replace '0' with the number
    } else {
        display.textContent += num;
    }
}

function decimalButton() {
    const currentDisplay = display.textContent;
    
    if (currentDisplay === '' || currentDisplay === '0') {
        display.textContent = '0.';
    } else if (!currentDisplay.includes('.')) {
        display.textContent += '.';
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
decimal.addEventListener("click", decimalButton);

function resetDisplay() {
    display.textContent = '0';
    shouldResetDisplay = false;
};

function handleOperator(op) {
    if (display.textContent === '0' && num1 === null) {return};

    if (shouldResetDisplay) {
        operator = op;
        return;
    }

    if (num1 === null) {
        num1 = display.textContent;
    } else {
        num2 = display.textContent;
        num1 = operate(num1, operator, num2);
        display.textContent = num1;
    }

    operator = op;
    shouldResetDisplay = true;
}

function handleEquals() {
    if (operator === null || num1 === null) return;

    num2 = display.textContent;
    const result = operate(num1, operator, num2);
    if (typeof result === 'number') {
        display.textContent = parseFloat(result.toFixed(6))
    } else {display.textContent = result};
    num1 = result;
    operator = null;
    shouldResetDisplay = true;
}

plus.addEventListener("click",() => handleOperator('+'));
minus.addEventListener("click", () => handleOperator('-'));
times.addEventListener("click", () => handleOperator('*'));
slash.addEventListener("click", () => handleOperator('/'));
equals.addEventListener("click", handleEquals);

clear.addEventListener("click", () => {
    display.textContent = '0';
    num1 = null;
    num2 = null;
    operator = null;
    shouldResetDisplay = false;
});