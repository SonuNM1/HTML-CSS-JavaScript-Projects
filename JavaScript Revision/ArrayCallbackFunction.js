
const a = [4,1,6,-2,-5,3,2,-8,6,7] ; 

const firstNeg = (num) => {
    return num < 0 ; 
}

// find() - returns the first value of an array element that passes a test

const value = a.find(firstNeg) ; 
console.log(value);

// findIndex() - returns the first index of an array element that passes a test 

const index = a.findIndex(firstNeg) ; 
console.log(index);

// forEach() - calls a function for each element 

a.forEach((num)=>{
    console.log("Array number: " , num);
})