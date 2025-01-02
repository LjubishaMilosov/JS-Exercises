// The Age Calculator
// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the age based on those years.
// outputs the result to the screen like so: "You are NN years old"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birth_year) {
    let currentYear = getCurrentYear();
    let myAge = currentYear - birth_year;
    return myAge;
}

function getCurrentYear() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return currentYear;
}

console.log(calculateAge(1983));








// function getCurrentDate() {
//     let currentDate = new Date();
//     let currentYear = currentDate.getFullYear();
//     let currentMonth = currentDate.getMonth() + 1; // In JavaScript, months are indexed starting from 0 -> Add 1 to get the correct month
//     let currentDay = currentDate.getDate();
//     let fullCurrentDate = `Full current date is ${currentYear}/${currentMonth}/${currentDay}`;
//     return fullCurrentDate;
//   }
  
//   console.log(getCurrentDate());