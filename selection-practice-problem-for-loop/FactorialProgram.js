const prompt = require("prompt-sync")();

const number = Number(prompt("Enter Number: "));

function factorialGenerator(number) {
  if (number >= 0 && Number.isInteger(number)) {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    console.log(number + " has factorial " + factorial);
  } else {
    console.log("Invalid user input.");
  }
}
factorialGenerator(number);
