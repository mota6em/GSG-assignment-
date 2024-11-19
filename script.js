//Task 2

const numArray = [2, 34, 21, 112, 53, 23, 12];
let average =
  numArray.reduce((acc, currentValue) => acc + currentValue, 0) /
  numArray.length;

console.log("The average of the number array is: ", average.toFixed(2));
