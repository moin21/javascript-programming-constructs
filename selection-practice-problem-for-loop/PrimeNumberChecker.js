const prompts = require("prompt-sync")();

let number = parseInt(prompts("Enter number to check if it's a prime: "));

function isPrime(number) {
  if (number >= 2) {
    let flag = 0;
    for (let i = 2; i <= number / 2; i++) {
      if (number % i == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 1) console.log(number + " Is Not a prime number");
    else console.log(number + " Is a Prime number");
  } else console.log("Invalid!!");
}
console.log(isPrime(number));
