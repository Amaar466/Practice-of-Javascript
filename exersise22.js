console.log("Question 1 chpter 2nd");
// with wile loop 
let count = 0;
while (count < 3) {
  count++;
  console.log('Hello');
};

// with for loop
console.log("with foreach loop");

for (let i = 0; i < 2; i++) {
  console.log('Hello');
}

// for user input and square of three Number
const prompt = require("prompt-sync")({ sigint: true });
let userInput1 = prompt("Enter first number");
let userInput2 = prompt("Enter 2nd number");
let userInput3 = prompt("Enter third number");


let number = parseFloat(userInput1);
let number2 = parseFloat(userInput2);
let number3 = parseFloat(userInput3);

if (!isNaN(number) && !isNaN(number2) && !isNaN(number3)) {
  let square = number * number;
  let square2 = number2 * number2;
  let square3 = number3 * number3;

  console.log("The square of " + number + " is " + square + ".");
  console.log("The square of " + number2 + " is " + square2 + ".");
  console.log("The square of " + number3 + " is " + square3 + ".");
} else {
  console.log('Invalid input. Please enter a valid number.');
}


console.log('A');
console.log('B');

for (let i = 0; i < 5; i++) {
  console.log('C');

}

for (let i = 0; i < 5; i++) {
  console.log('D');

}

console.log('E');

let i = 0;
for (i = 0; i < 100; i++) {
  console.log(i + 1);
}


//Print your name 100 times

let name = prompt("Enter your Name");

for (i = 0; i < 100; i++) {
  console.log(name);

}

// Print your name vericly an horizentl

const yourName = "YourName";
const screenWidth = 80;
const screenHeight = 24;

//  screen horizontally
for (let i = 0; i < screenWidth / yourName.length; i++) {
  process.stdout.write(yourName);
}
console.log("br");
for (let i = 0; i < screenHeight / 2; i++) {
  console.log(yourName);
}

// print your name 100 time with number

const yourNames = "YourName";

for (let i = 1; i <= 100; i++) {
  console.log(i + '. ' + yourNames);
}

// write program for 

for (let i = 1; i <= 20; i++) {
  console.log(`${i} --- ${i * i}`);
}

console.log("Enter")
for (let i = 8; i <= 89; i += 3) {
  console.log(i);
}

console.log('odd number');

for (i = 100; i >= 2; i -= 2) {
  console.log(i);
}

console.log('A');
console.log('B');
for (let i = 0; i < 10; i++) {
  console.log('A');

}
for (let i = 0; i < 6; i++) {
  console.log('B');

}

var userName = prompt("Enter your name:");


var numPrints = prompt("How many times would you like to print your name?");


numPrints = parseInt(numPrints);

if (!isNaN(numPrints) && numPrints > 0) {

  for (var ii = 0; ii < numPrints; ii++) {
    console.log(userName);
  }
} else {
  console.log("Please enter a valid number greater than 0 for the number of prints.");
}

//how to count row n d column with for loop

let row = 4;
let column = 19;

for (let i = 0; i < row; i++) {
  let rowString = '';
  for (let j = 0; j < column; j++) {
    rowString += "*";
  }
  console.log(rowString);
}


