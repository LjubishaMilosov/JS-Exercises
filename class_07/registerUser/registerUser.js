   

let inputs = document.getElementById("userInputs").children;
let result = document.getElementById("result");
let submitBtn = document.getElementById("submit");

function getUserInfo(inputElements){
    let result = "User: ";
    for (let input of inputElements) {
        result += input.value + " ";
    }
    result += "is registered!"
    return result;
}
submitBtn.addEventListener("click", function(){
    result.innerText = getUserInfo(inputs);
})