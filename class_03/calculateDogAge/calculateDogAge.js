// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well

function convertHumanToDogAge(ageInHumanYears) {
    let ageInDogYears = ageInHumanYears * 7;
    return ageInDogYears
}

function convertDogToHumanAge(ageInDogYears) {
    let ageInHumanYears = ageInDogYears /7;
    return ageInHumanYears;
}


let personChoice = prompt("Enter D to convert dog years to human years or H to convert human years to dog years ").toUpperCase();
let personInput = parseInt(prompt("Enter years: "));


if(personChoice === "D"){
    console.log(`The age in human years is ${convertDogToHumanAge(personInput)}`);
} else if(personChoice === "H") {
    console.log(`The age in dog years is ${convertHumanToDogAge(personInput)}`);
} else {
    console.log("Wrong Input!");
}
