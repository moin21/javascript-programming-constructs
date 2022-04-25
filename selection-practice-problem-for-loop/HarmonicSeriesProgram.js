var prompt = require("prompt-sync")();
var number = prompt("Enter the number : ");

function harmonic(number) {
  for (let i = 1; i <= number; i++) {
    console.log(1 / i + "\n");
  }
}
harmonic(number);
