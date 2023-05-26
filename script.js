// create an object that will account for the currentvalue, operator, 
//and additional value
// let numStorage = {
//     num1: 0,
//     operator: '',
//     num2: 0,
// };

let num1 = '';
let num2 = '';
let operator = '';

let equalsClicked = false;



const numberButtons = document.querySelectorAll('.number')
numberButtons.forEach(number => {
    number.addEventListener('click', () => {
        // put in a check to see if operator exists yet
        // if it does, set num2 up
        // test:
        // if (equalsClicked = true) {
        //     numberButtons.forEach(number => {
        //         number.addEventListener('click', function () {
        //             num1 = '';
        //             operator = '';
        //             equalsClicked = false;
        //         }); 
        //     })
            
        // };
        // **************
        // console.log(equalsClicked)
        // if (equalsClicked = true) {
        //     num1 = '';
        //     operator = '';
        //     equalsClicked = false;
        // };

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
        // equalsClicked = false;
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
    // equalsClicked = true;
    if (num1 !== '' && num2 !== '' && operator !== ''){
        operate();

        // complete the reset:
        // num1 = '';
        // operator = '';
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
        // issue with no decimal being shown in displaybox:
        // displayBox.textContent += decimalButton.innerHTML;
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
})


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
        displayBox.textContent = '0'
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
