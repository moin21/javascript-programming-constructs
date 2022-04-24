const prompts = require("prompt-sync")();

const number1 = parseInt(prompts("Enter first number: "));
const number2 = parseInt(prompts("Enter second number: "));
const number3 = parseInt(prompts("Enter third number: "));

let operation1 = number1 + number2 * number3;
let operation2 = number1 / number2 + number3;
let operation3 = (number1 % number2) + number3;
let operation4 = number1 * number2 + number3;

function operationWithMaxValue() {
  if (
    operation1 > operation2 &&
    operation1 > operation3 &&
    operation1 > operation4
  ) {
    return "Operation1 has Maximum value.";
  } else if (
    operation2 > operation1 &&
    operation2 > operation3 &&
    operation2 > operation4
  ) {
    return "Operation2 has Maximum value.";
  } else if (
    operation3 > operation1 &&
    operation3 > operation2 &&
    operation3 > operation4
  ) {
    return "Operation3 has Maximum value.";
  } else if (
    operation4 > operation1 &&
    operation4 > operation2 &&
    operation4 > operation3
  ) {
    return "Operation4 has Maximum value.";
  }
}
let maxValueOperation = operationWithMaxValue();
console.log(maxValueOperation);
