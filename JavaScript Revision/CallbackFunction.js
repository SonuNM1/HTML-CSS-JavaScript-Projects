
// A callback function is passed as an argument to the another function 

const calculate = (a,b, operation)=>{
    return operation(a,b) ; 
}

const addition = calculate(3,4, function(num1, num2){
    return num1+num2 ; 
})

console.log(addition);

const subtraction =(a,b)=> a-b ; // arrow function with single expression - without return statement and block i.e. curly braces

const subResult = calculate(5,6, subtraction); 

console.log(Math.abs(subResult));