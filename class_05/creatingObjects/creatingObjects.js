//Literal notation 

let hotel = {
    name: "Aleksandar Palace",
    rooms: 100,
    bookedRooms: 50,
    roomTypes: ['single', 'double', 'suite'],
    checkAvailability: function(){
        return this.rooms - this.bookedRooms;
    }
}

console.log("Hotel name: " + hotel.name);
console.log("How many rooms are booked? - " + hotel.bookedRooms);

console.log(hotel.checkAvailability());

//Constructor notation

let newObj = new Object();

newObj.newProperty = "new property";

newObj.newMethod = function(){
    console.log("I am an object method");
}

newObj.newMethod(); //calling the method using the dot and don't forget the ()

//Updating an object
console.log(newObj.newProperty); //"new property";
newObj.newProperty = "updated new property";
console.log(newObj.newProperty); //"updated new property";

//Deleting a property from an object
console.log(newObj);
delete newObj.newProperty;
console.log(newObj);



//Constructor function

function Hotel(hotelName, rooms, booked){
    //this.name points to the property of object that we are creating -> the hotelName is the parameter that is sent to this function
    this.name = hotelName;
    this.rooms = rooms;
    this.booked = booked;
}

let hotelContinental = new Hotel("Continental", 100, 20);
console.log(hotelContinental.name);
console.log(hotelContinental);

let hotelTino = new Hotel("Tino", 150, 50);
console.log(hotelTino);