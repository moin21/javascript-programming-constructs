/**
 * Function to roll a dice.
 * @returns - rollResult - Random number between 1 to 6 using random function.
 */
function roll() {
  return (rollResult = Math.round(Math.random() * 6 - 1 + 1) + 1);
}
/**
 * diceOneResult, diceTwoResult - result from first and second rolls.
 */
let diceOneResult = roll();
let diceTwoResult = roll();
/**
 * sum - sum of diceOneResult and diceTwoResult.
 */
let sum = diceOneResult + diceTwoResult;
/**
 * Printing to the console, diceOneResult, diceTwoResult and sum.
 */
console.log(diceOneResult);
console.log(diceTwoResult);
console.log(sum);
