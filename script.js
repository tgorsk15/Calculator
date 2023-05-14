// create an object that will account for the currentvalue, operator, 
//and additional value
// let numStorage = {
//     num1: 0,
//     operator: '',
//     num2: 0,
// };

let num1 = 0
let num2 = 0
let operator = ''



const numberButtons = document.querySelectorAll('.number')
numberButtons.forEach(number => {
    number.addEventListener('click', () => {
        num1 += number.innerHTML

        // IDEA: create a string, split the string at the operator,
        // set the variables to the correct pieces
        // statement += number.innerHTML;
        // console.log(num1)
        console.log(num1)
        console.log(operator)
    });
});

const operateButtons = document.querySelectorAll('.operate')
operateButtons.forEach(item => {
    item.addEventListener('click', () => {
        operator = item.innerHTML
    })
})
//operate function
// once two numbers areinputed and produce a result, set num1 
// equal to the result, and reset the operation
function operate() {
    console.log('test')
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
    return num1 + num2;
};

function subtraction (num1, num2) {
    return num1 - num2;
};

function multiplication (num1, num2) {
    return num1 * num2;
};

function division (num1, num2) {
    return num1 / num2;
};
console.log(division(4,2))
console.log(addition(8,2))
console.log(subtraction(50,43))
console.log(multiplication(5,12))