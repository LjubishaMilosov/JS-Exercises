// Write a JavaScript program to write the sum of squares of the numbers from 101 to 150


let number = 101;
let end = 150;

function sumOfSquares(startNum, endNum) {
  let sum = 0;
  while (startNum <= endNum) {
    sum += Math.pow(startNum, 2);
    startNum++;
  }
  return sum;
}
console.log(sumOfSquares(number, end));
console.log(sumOfSquares(1, 4));
