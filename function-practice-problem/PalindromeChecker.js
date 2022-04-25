var prompt = require("prompt-sync")();
let number1 = prompt("number1: ");
let number2 = prompt("number2: ");
let reverse = 0;
function palindromeCreater(number1) {
  while (number1 > 0 && number1 > 9) {
    reverse = reverse * 10 + (number1 % 10);
    number1 = parseInt(number1 / 10);
  }
  return reverse;
}
reverse = palindromeCreater(number1);
function palindromeChecker(reverse) {
  if (reverse == number2) {
    console.log("The two numbers are palindromes.");
  } else {
    console.log("The two numbers are not palindromes.");
  }
}
palindromeChecker();
