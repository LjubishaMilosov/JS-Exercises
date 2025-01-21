
function fibonacciGenerator (n) {

    let fibonacciSequence = [0,1];

    if(n <= 0) return [];
    if(n === 1) return [0];

    for(let i = 2; i < n; i++){
        let nextNumber = fibonacciSequence[i -1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
    }
    return fibonacciSequence;

}
console.log(fibonacciGenerator(10));


function fibonacciGenerator1 (n) {
    let output = [];
    if(n ===1){
        output = [0];
    } else if(n === 2){
        output = [0,1];
    } else {
        output = [0,1];
        for(let i = 2; i < n; i++){
            let nextNumber = output[output.length -2] +  output[output.length -1];
            output.push(nextNumber);
        }
    }
    return output;
}
console.log(fibonacciGenerator1(10));