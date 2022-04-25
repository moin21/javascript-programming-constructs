const prompts = require("prompt-sync")();

let number = parseInt(prompts("Enter value to convert"));
function powerOFTwo(number) {
  if (number >= 0 && Number.isInteger(number)) {
    for (let i = 0; i <= number; i++) {
      console.log("2^" + i + " = " + Math.pow(2, i));
    }
  } else {
    console.log("Enter only non-negative integers.");
  }
}
console.log(powerOFTwo(5));
