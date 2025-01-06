// Get Value from Input

const randomTextInput = document.getElementById("random-text-input");

const showValueBtn = document.getElementById("show-value-btn");

const displayTexParagraph = document.querySelector(".display-text");

showValueBtn.addEventListener("click", function(){
    const inputValue = randomTextInput.value;
    console.log(inputValue);
    displayTexParagraph.style.color = "red";
    displayTexParagraph.textContent = inputValue;

    randomTextInput.value = "";
});

randomTextInput.addEventListener("input", function(e){
    console.log(e.target.value);
    
});


// FORM EVENTS

function addStudentToList(firstName, lastName, listElement){
    const studentItem = document.createElement("li");
    studentItem.textContent = `${firstName} ${lastName}`;
    listElement.appendChild(studentItem);

}

const form = document.getElementById("users-form");
const usersList = document.getElementById("users-list");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const firstNameValue = document.getElementById("user-first-name").value;
    const lastNameValue = document.getElementById("user-last-name").value;

    addStudentToList(firstNameValue, lastNameValue, usersList);

    form.reset();
});