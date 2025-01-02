// Decription: Celsius to Fahrenheit formula: X°C x 1.8 + 32
// Action: Write a function that will be able to convert Celsius to Fahrenheit and display the result
// Bonus: Write another function that will be able to convert Fahrenheit to Celsius and display the result. Formula: (5/9) * (Fahrenheit-32);

function celsiusToFahrenheit(celsius){
    let fahreinheit = celsius * (9/5) + 32;
    return fahreinheit
}

function fahrenheitToCelsius(fahreinheits) {
    let celsius = (fahreinheits - 32) * (5 / 9);
    return celsius
}
let personChoice = prompt("Enter F for fahrenheit and C for celsius").toUpperCase();

let personInput = parseInt(prompt("Enter temperature value"));


if(personChoice === "F") {
    console.log(`The temperature in Celsius is ${fahrenheitToCelsius(personInput)}`);
}
else if (personChoice === "C") {
console.log(`The temperature in Fahrenheit is ${celsiusToFahrenheit(personInput)}`);
} 
else {
    console.log("Error");
};




