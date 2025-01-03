groceries = ["Bread", "Milk", "Butter", "Salad"];

function deleteItemFromGroceries(item) {
    for(let i = 0; i < groceries.length; i++){
        if(groceries[i] === item){
            groceries[i] = null;
            console.log('The item has been deleted');
            
            return true;
        }
    }
    console.log('The item has not been found');
        return false;
        
        
}

deleteItemFromGroceries("Salad"); // true
deleteItemFromGroceries("oil"); // false