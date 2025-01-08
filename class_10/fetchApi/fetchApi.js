let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => 
    {
        console.log(response);
        response.json()
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
            
        })
        
    })



    .catch(error => {
        console.log(error);
        
    })


});