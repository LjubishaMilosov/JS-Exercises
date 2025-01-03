// Task: Find the largest number in an array

let numbers = [35, 1, 15, 34, 22, 11, 7, 6, 45, 11];
let anotherArray = [36, 1, 12, 34, 22, 11, 7, 6, 45, 11, 87];

function findLargestnumber(inputArray) {
  let index = 0;
  let maxValue = inputArray[index];

  while (index < inputArray.length) {
    if (inputArray[index] > maxValue) {
      maxValue = inputArray[index];
    }
    console.log(`Current max is ${maxValue}`);
    index++;
  }
  console.log(`The official max is ${maxValue}`);
}

findLargestnumber(numbers);
findLargestnumber(anotherArray);
