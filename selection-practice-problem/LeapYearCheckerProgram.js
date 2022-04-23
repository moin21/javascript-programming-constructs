/**
 *
 * @param {*} year - Year we need to check if it is leap year.
 * Prints respective messages for if (for leap year) and else conditions.
 */
function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0 && year > 1581))
    console.log("This is a leap year");
  else console.log("This is not a leap year");
}
isLeapYear(2001);
isLeapYear(2000);
