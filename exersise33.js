function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
for (let i = 0; i < 50; i++) {
    const randomInt = getRandomInt(3, 6);
    console.log(randomInt);
  }

  //Generates a random number

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const x = getRandomInt(1, 50);
  const y = getRandomInt(2, 5);

  const result = Math.pow(x, y);
  

  console.log(`Random number x: ${x}`);
  console.log(`Random number y: ${y}`);
  console.log(`x^y: ${result}`);

  //generate random nmbr print name
  
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // random number between 1 and 10
  const randomNumber = getRandomInt(1, 10);
  
  // Print your name that many times
  for (let i = 0; i < randomNumber; i++) {
    console.log("Amaar");
  }
  
  // Function to get user input
  const prompt = require("prompt-sync")({ sigint: true });
function getUserInput(promptText) {
    return parseFloat(prompt(promptText));
  }
  
  // Ask the user to enter two numbers

  const xx = getUserInput("Enter the value of x:");
  const yy = getUserInput("Enter the value of y:");
  
 
  const results = Math.abs(x - y) / (x + y);

  console.log(`Result: ${result}`);
  
  //modullar rectanger

  // Function to draw a modular rectangle
function drawModularRectangle(width, height) {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const entry = (i * width + j) % 10;
        process.stdout.write(`${entry} `);
      }
      process.stdout.write('\n');
    }
  }
 
  console.log("3x5 Modular Rectangle:");
  drawModularRectangle(3, 5);
 
  console.log("\n4x8 Modular Rectangle:");
  drawModularRectangle(4, 8);
  