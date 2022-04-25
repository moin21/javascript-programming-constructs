function powerOfTen(digit) {
  const prompts = require("prompt-sync")();

  let action = parseInt(
    prompts(
      "Choose a number:\n 1. Feet to Inches\n 2. Feet to Meter\n 3. Inch to Feet\n 4. Meter to Feet "
    )
  );
  let number = parseInt(prompts("Enter value to convert"));
  switch (action) {
    case 1:
      console.log(number * 12);
      break;
    case 10:
      console.log(number * 0.3048);
      break;
    case 100:
      console.log(number / 12);
      break;
    case 1000:
      console.log(number * 3.2808);
      break;
  }
}
powerOfTen(digit);
