// Write a JavaScript program to convert a length given in feet to meters.
// TIP: 1 feet = 0.3048 meters
let conversionRate = 0.3048;
function convertFeetToMeters(feet) {
    let resultInMeters = feet * conversionRate;
    return resultInMeters;
}

console.log(convertFeetToMeters(10)); // 3.048

function convertMetersToFeet(meters) {
    let resultInFeet = meters / conversionRate;
    return resultInFeet;
}

console.log(convertMetersToFeet(1)); // 3.280839895013123
