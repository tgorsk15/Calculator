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
            displayBox.textContent = num1;
        }
        else {
            num2 += number.innerHTML;
            displayBox.textContent = num2;
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
        // pressing another operator will calculate result and then
        // continue to cycle through the operate() function
        if (num1 !== '' && num2 !== '') {
            operate();
        };
        operator = item.innerHTML;
        console.log(operator);
    });
});
//operate function
// once two numbers areinputed and produce a result, set num1 
// equal to the result, and reset the operation
const equalButton = document.querySelector('.result')
equalButton.addEventListener('click', () => {
    if (num1 !== '' && num2 !== '' && operator !== ''){
        operate();
    }
})
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
    }
    // else if (operator === '' && num1 === 0) {
    //     return displayBox.textContent = '0'
        
    // };
    // reset
    
    num1 = result.toString();
    num2 = '';
    displayBox.textContent = num1;
    console.log(num1);
   
};

// JS reference for display box
let displayBox = document.getElementById('display-box');

// function changeDisplay() {
//     // displayBox.textContent = 'new'
// }


// clear button
const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', clear)

function clear() {
    num1 = '';
    num2 = '';
    operator = '';
    displayBox.textContent = '0'
    console.log('clear')
    console.log(num1);
    console.log(num2);
};

// decimal button
const decimalButton = document.querySelector('.decimal')
decimalButton.addEventListener('click', () => {
    if (num1 === '' && operator === '') {
        num1 += decimalButton.innerHTML;
        console.log(num1);
    } else if (num1 !== '' && operator === '') {
        num1 += decimalButton.innerHTML;
        console.log(num1);
    } else if (operator !== '') {
        num2 += decimalButton.innerHTML;
        console.log(num2);
    };
})

// function addDecimal() {
//     // if (num1 === '' && operator === '') {
//     //     num1 += decimalButton.innerHTML;
//     //     console.log(num1);
//     // } else if (operator !== 0) {
//     //     num2 += decimalButton.innerHTML;
//     //     console.log(num2);
//     // };
// };




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
