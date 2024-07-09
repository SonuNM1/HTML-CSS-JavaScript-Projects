
function addSquare(a,b){
    const sa = square(a) ; 
    const sb = square(b) ; 
    function square(num){
        return num * num ; 
    }
    return sa+sb ; 
}

console.log(addSquare(3,4)) ; 

// arrow function with statements 

const greet = (count)=>{
    for(let i=0 ; i< count ; i++){
        console.log("Hello world");
    }   
}

greet(4) ; 

// arrow function with expression - if the arrow function consists of a single expression, we can omit the 'return' keyword and the curly braces

const square = (num)=> num*num ; 

// if the arrow function has a block body (multiple statements), we need to use the curly braces and explicitly use the 'return' keyword to return a value . 

const example =(num)=>{
    return num*num ; 
}

console.log(example(3)) ; 