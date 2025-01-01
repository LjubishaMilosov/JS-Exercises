// Write a JavaScript program that will read the two sides of a rectangle and calculate its area
// TIP: area = a * b
let a  = prompt("Enter the value of a: ");
let b = prompt("Enter the value of b: ");

let sideA = parseInt(a);
let sideB = parseInt(b);

function calculateRectangleArea(){
    let area = sideA * sideB;
    return area;    

}

console.log(calculateRectangleArea()); // 8
