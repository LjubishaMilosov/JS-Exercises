// Write a JavaScript program that will calculate area of Circle
// TIP: area = π * r2

let pi = 3.14159;
let radius = prompt("Enter the radius of the circle: ");
radius = parseInt(radius);
function calculateAreaOfCircle() {
    //let area = pi * (radius ** 2);
    let area = pi * Math.pow(radius, 2);
    return area;
}

console.log(`The radius of the circle is ${calculateAreaOfCircle(2)}`); // 12.56636
console.log(typeof radius);

