let groceries = ["Bread", "Milk", "Butter"];

function addItemsToList(item) {
    if(typeof(item) === "string"){
        groceries.push(item);
        console.log(`You have added ${item} item to the list`);
    } else {
        console.log(`The ${item} item was not added to the list`);
        
    }


}

addItemsToList("Salad");