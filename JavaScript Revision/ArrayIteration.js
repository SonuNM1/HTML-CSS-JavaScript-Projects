
let numbers = [1,2,3,4,5] ; 

// forEach() - executes a provided function once for each array element. Used for iterating over an array to perform some action for each array element

numbers.forEach(function(num){
    console.log(num*2) ; 
})

// map() - returns a new array element pf same length

let squares = numbers.map(function(number){
    return number*number ; 
})

console.log(squares) ; 

// reduce() - executes a reducer function(that you provide) on each element of the array, resulting in a single output value. Used for aggregating/combining all elements in the array into a single value (e.g. sum, product)

let sum = numbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue ; // sums up all the element
},0) ; 

console.log(sum) ; 