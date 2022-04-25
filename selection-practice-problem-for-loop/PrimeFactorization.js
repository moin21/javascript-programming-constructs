const prompt = require("prompt-sync")();

const number = Number(prompt("Enter Number: "));

function primeFactorization(number) {
  for (int i = 2; i <= number; i++) {
			if(number%i==0) {
				System.out.print(i+" ");
				number = number/i;
			}
		}
	}
primeFactorization(number);
