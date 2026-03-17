let k = prompt("Enter number")

function Factorial(c){
    if (c==0){
        return 1;
    }
    if(c==1){
        return 1;
    }
    if (c<0){

        return "invalid Number"
    }
    return (c*Factorial(c-1))
}

console.log(Factorial(-2))
alert(Factorial(k))