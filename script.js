//Task 2

const numArray = [2, 34, 21, 112, 53, 23, 12];
let average =
  numArray.reduce((acc, currentValue) => acc + currentValue, 0) /
  numArray.length;
console.log("The average of the number array is: ", average.toFixed(2));

//Task 3
const stringArray = [
  "Ahmed",
  "Mohammed",
  "Rami",
  "Ahmed", //duplicated
  "Rami", //duplicated
  "Motasem",
  "Mohammed", //duplicated
];

let uniqueStringArray = [...new Set(stringArray)];
console.log("Unique Values of the String Array: ", uniqueStringArray);
