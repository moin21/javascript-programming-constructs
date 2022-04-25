let money = 100,
  win = 0,
  lose = 0,
  noOfbets;
function multipleCoinFlip() {
  while (money > 0 && money < 200) {
    let result = Math.floor(Math.random() * 10) % 2;

    if (result == 0) {
      console.log("won");
      win++;
      money++;
    } else {
      console.log("lost");
      lose++;
      money--;
    }
    noOfbets = win + lose;
  }
  console.log("Total Bets Played: " + noOfbets);
  console.log(
    "Total Wins: " +
      win +
      " and total lost bets: " +
      lose +
      ". Remaining money is: " +
      money
  );
}
multipleCoinFlip();
