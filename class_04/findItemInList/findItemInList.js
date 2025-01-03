groceries = ["Bread", "Milk", "Butter", "Salad"];


function findItemInAList(item){
 for(listItem of groceries){
    if(listItem === item){
        console.log(`The item ${item} was found!`);
        return listItem;  // return always goes out of the function
    }
 }
 console.log(`There was no ${item} item in the list`);
 return null;
 
}

console.log(findItemInAList("Buttter"));