const prompts = require("prompt-sync")();

let number = parseInt(prompts("Enter a number between One to Nine: "));
console.log("Number = " + number);

if (number == 1) {
  console.log("Number in Words = ONE");
} else if (number == 2) {
  console.log("Number in Words = TWO");
} else if (number == 3) {
  console.log("Number in Words = THREE");
} else if (number == 4) {
  console.log("Number in Words = FOUR");
} else if (number == 5) {
  console.log("Number in Words = FIVE");
} else if (number == 6) {
  console.log("Number in Words = SIX");
} else if (number == 7) {
  console.log("Number in Words = SEVEN");
} else if (number == 8) {
  console.log("Number in Words = EIGHT");
} else {
  console.log("Number in Words = NINE");
}
