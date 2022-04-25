var prompt = require("prompt-sync")();
var conversionType = prompt(
  "Press 1 for fahreneheit to celsius and 2 for celsius to fahreneheit:"
);
var temprature = prompt("Enter the temprature");
function tempratureConversion(conversionType) {
  if (conversionType == 1) {
    let celsius = ((temprature - 32) * 5) / 9;

    console.log("Temprature in Celsius: " + celsius);
  } else if (conversionType == 2) {
    let fahreneheit = (temprature * 9) / 5 + 32;
    console.log("Temprature in fahreneheit: " + fahreneheit);
  } else console.log("Choose valid conversion type");
}
tempratureConversion(conversionType);
