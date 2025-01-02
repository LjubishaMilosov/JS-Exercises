
// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

let accountMoney = 2000;
let withdrawalAmount = parseInt(prompt("Please enter the amount you want to withdraw."));
let remainingBalance = accountMoney - withdrawalAmount;
function withdrawMoney() {
    
    if(typeof withdrawalAmount !== "number" || withdrawalAmount <= 0 || isNaN(withdrawalAmount)) {
        return "Please enter a valid number!";
    }
    else if(withdrawalAmount > accountMoney){
        return "Not enough money. Please try again!";
    }  else {
        return `Withdrawal Successful! You have withdrawn: ${withdrawalAmount} dollars. Your current balance is ${remainingBalance} dollars.`;
    }
}

console.log(withdrawMoney());