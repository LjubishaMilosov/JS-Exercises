// Create OBJECT animal with 2 properties and 1 method:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt

let animal = {
    name: prompt("Enter the animal's name:"),
    kind: prompt("Enter the animal's kind:"),
    speak: function(message){
        console.log(`${this.name}, the ${this.kind} says: ${message}`);
        
    }
};

animal.speak("Hey Bro!");