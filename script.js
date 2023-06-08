

let num1 = '';
let num2 = '';
let operator = '';

let equalsClicked = false;
let decimalCLicked = false;

let maxDigit = 13;


// ********
// need to fix issue of keeping the number contained in displaybox


const numberButtons = document.querySelectorAll('.number')
numberButtons.forEach(number => {
    number.addEventListener('click', () => {
        
        // **************
        if (equalsClicked === true) {
            clear();
        };
        equalsClicked = false;
        console.log(equalsClicked);

        // num1
        if (operator === '') {
            if (num1.length === maxDigit) {
                num1 += ''
            } else {
                num1 += number.innerHTML;
            };
            displayBox.textContent = num1;
        };

        // num2
        if (operator !== '') {
            decimalButton.disabled = false;
            if (num2.length === maxDigit) {
                num2 += ''
            } else {
                num2 += number.innerHTML;
            };
            displayBox.textContent = num2
        };
        

        // IDEA: create a string, split the string at the operator,
        // set the variables to the correct pieces
        console.log(num1)
        console.log(num2)
    });
});

const operateButtons = document.querySelectorAll('.operate')
operateButtons.forEach(item => {
    item.addEventListener('click', () => {
        equalsClicked = false;
        decimalButton.disabled = false;
        console.log(equalsClicked);
        // pressing another operator will calculate result and then
        // continue to cycle through the operate() function
        if (num1 !== '' && num2 !== '') {
            operate();
        };
        operator = item.innerHTML;
        if (num1 === '' && num2 === '') {
            operator = '';
        };
        console.log(operator);
    });
});


//operate function
// once two numbers are inputed and produce a result, set num1 
// equal to the result, and reset the operation
const equalButton = document.querySelector('.result')
equalButton.addEventListener('click', () => {
    if (num1 !== '' && num2 !== '' && operator !== ''){
        operate();
        decimalButton.disabled = false;
        equalsClicked = true;
        console.log(equalsClicked);
    }
});

function operate() {
    // first, convert num1 and num2 into numbers
    // then check for operator type and run correct function
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log(operator);

    if (operator === '+') {
        addition(num1, num2);
    } else if (operator === '-') {
        subtraction(num1, num2);
    } else if (operator === 'X') {
        multiplication(num1, num2);
    } else if (operator === '/') {
        division(num1, num2);
    };

    // reset
    num1 = result;
    console.log(num1);
    num1 = num1.toString();
    console.log(num1);
    checkDigit();
    num2 = '';
    displayBox.textContent = num1;
};

// JS reference for display box
let displayBox = document.getElementById('display-box');


// clear button
const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', clear)

function clear() {
    num1 = '';
    num2 = '';
    operator = '';
    displayBox.textContent = '0';
    decimalButton.disabled = false;
    console.log('clear');
    console.log(num1);
    console.log(num2);
};

// limit digit number
function checkDigit() {
    if (num1.length > maxDigit) {
        // *** length does not work with numbers
        // going to have to slice a string and use that
        num1 = num1.substring(0, 13);
        num1 += '..'
        console.log(num1);
        return num1
    };
};

// decimal button
const decimalButton = document.querySelector('.decimal')
decimalButton.addEventListener('click', () => {
    if (equalsClicked === true) {
        clear();
    };
    equalsClicked = false;
    if (num1 === '' && operator === '') {
        num1 += decimalButton.innerHTML;
        displayBox.textContent += num1;
        console.log(num1);
    } else if (num1 !== '' && operator === '') {
        num1 += decimalButton.innerHTML;
        displayBox.textContent = num1;
        console.log(num1);
    } else if (operator !== '') {
        num2 += decimalButton.innerHTML;
        displayBox.textContent = num2;
        console.log(num2);
    };
    decimalButton.disabled = true;
});


// backspace button
const backButton = document.querySelector('.delete')
backButton.addEventListener('click', () => {
// need to add in displaybox
    if (num1 !== '' && num2 === '') {
        num1 = num1.substring(0, num1.length - 1)
        displayBox.textContent = num1;
        console.log(num1)
    } else if (num1 !== '' && num2 !== '') {
        num2 = num2.substring(0, num2.length -1)
        displayBox.textContent = num2;
        console.log(num2);
    } else {
        displayBox.textContent = '0';
    }
});

// arithmatic functions
function addition (num1, num2) {
    return result = num1 + num2;
};

function subtraction (num1, num2) {
    return result = num1 - num2;
};

function multiplication (num1, num2) {
    return result = num1 * num2;
};

function division (num1, num2) {
    return result = num1 / num2;
};
