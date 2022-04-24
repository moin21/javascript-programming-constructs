const prompts = require("prompt-sync")();

const number = parseInt(prompts("Enter a number between One to Seven: "));
console.log(number);
function numberToWeekday(number) {
  if (number == 1) {
    return "It's Sunday";
  } else if (number == 2) {
    return "It's Monday.";
  } else if (number == 3) {
    return "It's Tuesday.";
  } else if (number == 4) {
    return "It's Wednesday.";
  } else if (number == 5) {
    return "It's Thursday";
  } else if (number == 6) {
    return "It's Friday";
  } else if (number == 7) {
    return "It's Saturday";
  } else {
    return "Please Enter a correct WeekDay Number!!";
  }
}
let weekDay = numberToWeekday(number);
console.log(weekDay);
