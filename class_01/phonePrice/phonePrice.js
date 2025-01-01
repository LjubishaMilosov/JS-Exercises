// Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%.

let numberOfOhones = prompt("Enter the number of phones: ");
let phonePrice = 119.95;
let tax = 5 / 100;
 
function calculatePriceOfPhones() {
   let totalPrice = phonePrice * numberOfOhones;
   let totalTax = totalPrice * tax;
   let totalPriceWithTax = totalPrice + totalTax;
   return totalPriceWithTax;
}

console.log(`The price of ${numberOfOhones} phones including tax is $${calculatePriceOfPhones()}`);
