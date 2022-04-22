/**
 * Function to convert length from inches to feets
 * @param {*} inches - Length in inches.
 * @returns - feets - Length in feets.
 */
function inchesToFeets(inches) {
  return (feets = inches / 12);
}
/**
 * Printing length in Feets by calling inchesToFeets function.
 */
console.log(inches + " inches in feets: " + inchesToFeets(42));

/**
 * Function to calculate area of Rectangle.
 * @param {*} length - Length in Feets.
 * @param {*} width - Width in Feets.
 * @returns - Area of Triangle.
 */
function areaOfRectangle(length, width) {
  return (area = length * width);
}
/**
 * Function to convert area in feet squares to meter squares.
 * areaInMeters = areaInFeetSq * 0.3048
 * @param {*} areaInFeetSq - area in Feet Squares
 * @returns - area in Meter Squares.
 */
function areaInMeters(areaInFeetSq) {
  return (areaInMeters = areaInFeetSq * 0.3048);
}
/**
 * Printing area in Meter Squares by calling areaOfRectangle as a parameter for areaInMeters.
 */
console.log(
  "Area of Rectangle in Meters: " + areaInMeters(areaOfRectangle(60, 40))
);
