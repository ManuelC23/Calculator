const display = document.querySelector('.calculator-display');
let displayNumber = 0;
let num1 = 0;
let num2 = 0;
let operator = '';
let operationResult = 0;
display.innerText = displayNumber;

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 == 0) return 'Error';
    return num1 / num2;
}

function isInt(n) {
    return n % 1 === 0;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return undefined;
    }
}

function addDot() {
    if (isInt(displayNumber)) {
        displayNumber = displayNumber + `.`;
        return display.innerText = displayNumber;
    }
}

function addNumber() {
    if (num1 == 0) {
        operator = '+';
        num1 = displayNumber;
        displayNumber = 0;
    }
    else if (operator !== '+') {
        num2 = displayNumber;
        num1 = operate(operator, num1, num2)
        display.innerText = (num1);
        displayNumber = 0;
        operator = '+';
    } else {
        num2 = displayNumber;
        num1 = add(num1, num2);
        display.innerText = (num1);
        displayNumber = 0;
    }
};

function subtractNumber() {
    if (num1 == 0) {
        operator = '-';
        num1 = displayNumber;
        displayNumber = 0;
    } else if (operator !== '-') {
        num2 = displayNumber;
        num1 = operate(operator, num1, num2)
        display.innerText = (num1);
        displayNumber = 0;
        operator = '-';
    } else {
        num2 = displayNumber;
        num1 = subtract(num1, num2);
        display.innerText = (num1);
        displayNumber = 0;
    }
};

function multiplyNumber() {
    if (num1 == 0) {
        operator = '*';
        num1 = displayNumber;
        displayNumber = 0;
    } else if (operator !== '*') {
        num2 = displayNumber;
        num1 = operate(operator, num1, num2)
        display.innerText = (num1);
        displayNumber = 0;
        operator = '*';
    } else {
        num2 = displayNumber;
        num1 = multiply(num1, num2);
        display.innerText = (num1);
        displayNumber = 0;
    }
};

function divideNumber() {
    if (num1 == 0) {
        operator = '/';
        num1 = displayNumber;
        displayNumber = 0;
    } else if (operator !== '/') {
        num2 = displayNumber;
        num1 = operate(operator, num1, num2)
        display.innerText = (num1);
        displayNumber = 0;
        operator = '/';
    } else {
        num2 = displayNumber;
        num1 = multiply(num1, num2);
        display.innerText = (num1);
        displayNumber = 0;
    }
};

function equal() {
    num2 = displayNumber;
    let result = operate(operator, num1, num2);
    displayNumber = result;
    display.innerText = displayNumber;
    num1 = result;
    displayNumber = 0;
};

function clear() {
    displayNumber = 0;
    num1 = 0;
    num2 = 0;
    operator = '';
    display.innerText = displayNumber;
};

const number = document.querySelectorAll('.number');
number.forEach(num => {
    num.addEventListener('click', (event) => {
        if (displayNumber <= 99999999) {
            displayNumber = Number(displayNumber + `${event.target.innerText}`);
            return display.innerText = displayNumber;
        }
    })
}
);

document.addEventListener('keydown', function (event) {
    if (!isNaN(event.key)) {
        if (event.key == 0) {
            number[9].style.backgroundColor = 'rgb(206, 205, 205)';
            setTimeout(() => number[9].style.backgroundColor = 'rgb(179, 179, 179)', 100)
        } else {
            number[(event.key - 1)].style.backgroundColor = 'rgb(206, 205, 205)';
            setTimeout(() => number[(event.key - 1)].style.backgroundColor = 'rgb(179, 179, 179)', 100)
        }

        if (displayNumber <= 99999999) {
            displayNumber = Number(displayNumber + `${event.key}`);
            return display.innerText = displayNumber;
        }
    }
    switch (event.key) {
        case '+':
            return addNumber();
        case '-':
            return subtractNumber();
        case '*':
            return multiplyNumber();
        case '/':
            return divideNumber();
        case 'Enter':
            return equal();
        case 'Backspace':
            return clear();
        case 'Delete':
            return clear();
        case '.':
            return addDot(displayNumber);
    }
});


const clearDisplay = document.querySelector('#clear');
clearDisplay.addEventListener('click', clear);

const addNumbers = document.querySelector('#add');
addNumbers.addEventListener('click', addNumber);

const subtractNumbers = document.querySelector('#subtract');
subtractNumbers.addEventListener('click', subtractNumber);

const multiplyNumbers = document.querySelector('#multiply');
multiplyNumbers.addEventListener('click', multiplyNumber);

const divideNumbers = document.querySelector('#divide');
divideNumbers.addEventListener('click', divideNumber);

const equals = document.querySelector('#equals');
equals.addEventListener('click', equal);