const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "));

function powerOfTwo(number) {
  if (number >= 0 && Number.isInteger(number)) {
    while (true) {
      let power = Math.pow(2, number);
      if (power <= 256) {
        console.log("2^" + number + " = " + power);
        break;
      } else {
        console.log("Enter Number between 1 to 8");
        break;
      }
    }
  } else {
    console.log("Enter only non-negative integers.");
  }
}
powerOfTwo(number);
