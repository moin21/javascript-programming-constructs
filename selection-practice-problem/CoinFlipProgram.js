/**
 * Function to Flip coin.
result assigned to random function giving result 1 or 0
.If not zero(1): Heads, else Tails(0).
 */
function coinFlip() {
  let result = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
  if (result) {
    console.log("Heads");
  } else console.log("Tails");
}
/**
Calling coinFlip funcion to print to console.
 */
coinFlip();
