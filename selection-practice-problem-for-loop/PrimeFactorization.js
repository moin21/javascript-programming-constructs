const prompt = require("prompt-sync")();

const number = Number(prompt("Enter Number: "));

function primeFactorization(number) {
  while (number % 2 == 0) {
    process.stdout.write(2 + " ");
    number /= 2;
  }
  for (let i = 2; i * i <= number; i++) {
    while (number % i == 0) {
      if (number % i == 0) {
        process.stdout.write(i + " ");
        number /= i;
      }
    }
  }
  if (number > 2) {
    console.log(number);
  }
}
primeFactorization(number);
