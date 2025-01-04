// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it

// Rookie solution:

// function maxMinSum(array){
//     let max = array[0];
//     let min = array[0];
//     for(i = 0; i < array.length; i++){
//         if (typeof array[i] !== "number" || isNaN(array[i])){
//             continue;
//         } else if(max < array[i]){
//             max = array[i];
//         } else if(min > array[i]){
//             min = min > array[i]
//         }

//     }
//     return `The sum of max and min is ${max + min}`;
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(maxMinSum(array));


//another, GREAT solution:

function findLargestValue(inputArray) {
  let index = 0;
  let maxValue = inputArray[0];
  while (index < inputArray.length) {
    if (maxValue < inputArray[index]) {
      maxValue = inputArray[index];
    }
    index++;
  }
  return maxValue;
}

function findLowestValue(inputArray){
    let index = 0;
    let minValue = inputArray[0];
    while(index < inputArray.length){
        if(minValue > inputArray[index]){
            minValue = inputArray[index];
        }
        index++;
    }
    return minValue;
}

function findSumOfMaxMinFromArray(arr) {
    let numbersOnly = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && !isNaN(arr[i])) {
          numbersOnly.push(arr[i]);
        }
      }
  if (numbersOnly.length === 0) {
    return "Error: The array contains no valid numbers.";
  }
  let max = findLargestValue(numbersOnly);
  let min = findLowestValue(numbersOnly);
  let sum = max + min;
  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

const arr = [3, 0.5, 5, "text", 6, 8, null, NaN, 11];
console.log(findSumOfMaxMinFromArray(arr));

// Simplified Version(using the keyword "continue"):

function sumMinMax(arr) {
  let numbersOnly=[];

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] !== "number" || isNaN(arr[i])){
      continue;
    }
    numbersOnly.push(arr[i]);
  }
  if(numbersOnly.length === 0){
    return "Error: The array contains no valid numbers.";
  }
  let max = numbersOnly[0];
  let min = numbersOnly[0];

  for(let i = 0; i < numbersOnly.length; i++){
    if(max < numbersOnly[i]){
      max = numbersOnly[i];
    }
    if(min >numbersOnly[i]){
      min = numbersOnly[i];
    }
  }
  let sum = max + min;
  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;

}
const arr1 = [3, 0.5, 5, "text", 6, 8, null, 11];
console.log(sumMinMax(arr1));

// Simplified Version 2 (without keyword "continue"):

function sumMaxMin(arr) {
  let numbersOnly = []; 

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      numbersOnly.push(arr[i]);
    }
  }
  if (numbersOnly.length === 0) {
    return "Error: The array contains no valid numbers.";
  }

  let max = numbersOnly[0];
  let min = numbersOnly[0];

  for (let i = 1; i < numbersOnly.length; i++) {
    if (max < numbersOnly[i] ) {
      max = numbersOnly[i];
    }
    if (min > numbersOnly[i]) {
      min = numbersOnly[i];
    }
  }

  const sum = max + min;
  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}


const arr2 = [3, 0.5, 5, "text", 6, 8, null, 11];
console.log(sumMaxMin(arr2)); 
