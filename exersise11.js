console.log("HEllo World");

const rows = 4;
const columns = 19;

for (let i = 0; i < rows; i++) {

  let rowString = '';

  for (let j = 0; j < columns; j++) {
    rowString += "*";

  }
  console.log(rowString);
}

console.log('Second Question')
//Second Question

for (let i = 0; i < rows; i++) {

  let rowString = '';


  for (let j = 0; j < columns; j++) {
    if (i === 0 || i === rows - 1 || j === 0 || j === columns - 1) {

      rowString += '*';
    } else {

      rowString += ' ';
    }
  }


  console.log(rowString);
}
console.log('Third Question')

const rowws = 4;

for (let i = 1; i <= rows; i++) {

  let rowStrings = '';

  for (let j = 1; j <= i; j++) {
    rowStrings += '*';
  }


  console.log(rowStrings);
}

console.log('2nd Mathmatic Question');

let result = (512 - 282) / (47 * 48 + 5);

console.log("Result :" + result);

console.log('2nd quesion');

const prompt = require("prompt-sync")({ sigint: true });

let userInput = prompt("Enter a number:");


let number = parseFloat(userInput);


if (!isNaN(number)) {

  let square = number * number;


  console.log("The square of " + number + " is " + square + ".");
} else {

  console.log("Invalid input. Please enter a valid number.");
}

console.log("killorams and pounds");


let weightInKilograms = prompt("Enter the weight in kilograms:");


let kilograms = parseFloat(weightInKilograms);


if (!isNaN(kilograms)) {

  let pounds = kilograms * 2.2;


  console.log(`${kilograms} kilograms is equal to ${pounds.toFixed(2)} pounds.`);
} else {

  console.log("Invalid input. Please enter a valid weight in kilograms.");
}


console.log("chpter first question 2nd last");

let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let num3 = prompt("Enter third number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
  let total = num1 + num2 + num3;
  let average = total / 3;


  console.log(`The sum of the three numbers is: ${total}`);
  console.log(`The average of the three numbers is: ${average.toFixed(2)}`);
} else {

  console.log("Invalid input. Please enter valid numbers for all three inputs.");
}