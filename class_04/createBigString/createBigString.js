// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

function validateString(str) {
  return typeof str === "string";
}

function concatenateStrings(arr) {
  for (let str of arr) {
    if (!validateString(str)) {
      return "Error: One or more elements in the array is not a string.";
    }
  }
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) {
      //to add a space
      result += " "; //between the strings
    }
  }
  return result;  
}

let inputArray = ["Hello", "there", "students", "of", "SEDC", "!"];
let result = concatenateStrings(inputArray);
console.log(result);
// alert(result);

let IncorrectInputArray = ["Hello", 5, "there", "students", "of", "SEDC", "!"];
result = concatenateStrings(IncorrectInputArray);
console.log(result);
