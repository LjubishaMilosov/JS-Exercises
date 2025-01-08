jQuery(function(){


    // Example 1
    let myButton = $("#btn");

    myButton.on("click", function(){
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            success: function(result){
                console.log(result);
            },
            error: function(err){
                console.log(err);
            }

        })

    })


    // Example 2
    function showName(name){
        $("#pokemonResult").text("The Pokemon we found is " + name);
    }

function callPokemonApi(id){
    $.ajax({
//  method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
        success: function(pokemonResult){ //executed only if the call is successful
            console.log(pokemonResult);
            showName(pokemonResult.name);
            
        },
        error: function(err){ //executed only when error ocurs
            console.log("Error: " + err);
            
        }

    })
}

let button = $("#getPokemonBtn");
button.on("click", function(){
    callPokemonApi(1);
})



})