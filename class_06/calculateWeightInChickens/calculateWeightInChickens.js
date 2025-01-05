//  Exercise - #
// Weight calculator in chickens
// Want to know how you wiegh in chikens? No problem!

// Write a function named weightInChickens that:
// Takes an input weigh in kilograms
// Calculates weight in chickens ( 1 chicken = 0.5kg )
// The input should be entered through prompt
// The result should be shown in the HTML of the page
// Note:The html page needs to have title and result paragraph


function weightInChickens(weight) {
    return weight / 0.5;
  }
  
  function renderWeightInChickens() {
    let resultDiv = document.getElementById("result");
    let input = parseInt(prompt("Please enter how much you weigh:"));
    if (!isNaN(input)) {
      resultDiv.innerHTML = `<h3>Your weight in KGs is ${input} and your weight in chickens is approximately ${weightInChickens(input)} chickens <img src="chicken.png" style="height:2vh"></h3>`;
    } else {
      resultDiv.innerHTML = `<h3>Sorry! Wrong input! Refresh the page again!</h3>`;
    }
  }
  
  // Call the renderWeightInChickens function to execute
  renderWeightInChickens();