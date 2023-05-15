// create an object that will account for the currentvalue, operator, 
//and additional value
// let numStorage = {
//     num1: 0,
//     operator: '',
//     num2: 0,
// };

let num1 = ''
let num2 = ''
let operator = ''



const numberButtons = document.querySelectorAll('.number')
numberButtons.forEach(number => {
    number.addEventListener('click', () => {
        // put in a check to see if operator exists yet
        // if it does, set num2 up
        if (operator === '') {
            num1 += number.innerHTML;
        }
        else {
            num2 += number.innerHTML;
        }

        // IDEA: create a string, split the string at the operator,
        // set the variables to the correct pieces
        console.log(num1)
        console.log(num2)
    });
});

const operateButtons = document.querySelectorAll('.operate')
operateButtons.forEach(item => {
    item.addEventListener('click', () => {
        operator = item.innerHTML
        console.log(operator)
    });
});
//operate function
// once two numbers areinputed and produce a result, set num1 
// equal to the result, and reset the operation
const equalButton = document.querySelector('.result')
equalButton.addEventListener('click', operate)
function operate() {
    // first, convert num1 and num2 into numbers
    // then check for operator type and run correct function
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(operator)

    if (operator === '+') {
        addition(num1, num2);
    } else if (operator === '-') {
        subtraction(num1, num2);
    } else if (operator === 'X') {
        multiplication(num1, num2);
    } else if (operator === '/') {
        division(num1, num2);
    } else if (operator === '') {
        console.log(num1);
    }
}



// JS reference for display box
const displayBox = document.querySelector('.display-box')
// function digitPress(digit) {
//     displayBox.value = digit;
// };
// console.log(digitPress(4));
// const test = document.getElementById(v7).value;
// console.log(test);


// arithmatic functions
function addition (num1, num2) {
    console.log(sum = num1 + num2);
};

function subtraction (num1, num2) {
    console.log(num1 - num2);
};

function multiplication (num1, num2) {
    console.log(num1 * num2);
};

function division (num1, num2) {
    console.log(num1 / num2);
};
