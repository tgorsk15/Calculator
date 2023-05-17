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
        // put in another check to make sure 'result' isn't being
        // used again if no operator was clicked after a calculation
        // if (operator === '' && num1 !== '') {
        //     num1 = '';
        // };
        
        // put in a check to see if operator exists yet
        // if it does, set num2 up
        if (operator === '') {
            num1 += number.innerHTML;
        }
        else {
            num2 += number.innerHTML;
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
        console.log(operator);
        // pressing another operator will calculate result and then
        // continue to cycle through the operate() function
        if (num1 !== '' && num2 !== '') {
            operate();
        };
        operator = item.innerHTML;
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
    };
    // reset
    
    num1 = result.toString();
    num2 = '';
    // operator = '';
    console.log(num1);
    console.log(num2);
   
};


let displayBox = document.querySelector('.display-box')

// clear button
const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', clear)

function clear() {
    displayBox = ''
    num1 = '';
    num2 = '';
    operator = '';
};



// JS reference for display box
// function digitPress(digit) {
//     displayBox.value = digit;
// };
// console.log(digitPress(4));
// const test = document.getElementById(v7).value;
// console.log(test);


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
