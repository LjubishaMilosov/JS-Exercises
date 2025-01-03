// Action: Write a JavaScript program that will read in a number and write out its digits

function digitsInNumber(input) {
    console.log(`input: ${input}`);

    while(input > 0){
        console.log(input % 10);
        input = parseInt(input /10);

        // console.log(`input: ${input}`);
    }
    
}

digitsInNumber(234);
digitsInNumber(2345670);