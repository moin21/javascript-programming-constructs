const prompts = require("prompt-sync")();

let digit = parseInt(
  prompts("Enter a number 1, 10, 100, 1000, 10000, 100000, 1000000: ")
);
function powerOfTen(digit) {
  switch (digit) {
    case 1:
      console.log("UNIT");
      break;
    case 10:
      console.log("TEN");
      break;
    case 100:
      console.log("HUNDRED");
      break;
    case 1000:
      console.log("THOUSAND");
      break;
    case 10000:
      console.log("TEN-THOUSAND");
      break;
    case 100000:
      console.log("LAKH");
      break;
    case 1000000:
      console.log("TEN-LAKH");
      break;
  }
}
powerOfTen(digit);
