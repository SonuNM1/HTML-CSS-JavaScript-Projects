
// Using Array literal 

const fruit = ["Apple", "Banana", "Cherry"] ; 

// using array constructor 

const number = new Array(1,2,3,4) ; 

// push() - add one or more elements to the end of an array and return the new length of array 

fruit.push("Mango") ; 

// pop() - removes last element of the array and returns it as well 

fruit.pop() ; 

// shift() - removes first element of the array and returns it as well 

const firstFruit = fruit.shift() ; 
console.log(firstFruit) ; 

// concat() - merges two or more array and returns a new array 

let moreFruit = ["Mango", "Pineapple"] ; 
let allFruit = fruit.concat(moreFruit) ; 
console.log(allFruit) ; 

// slice() - returns shallow copy of a portion of an array into a new array object 

let someFruit = allFruit.slice(1,3) ; 
console.log(someFruit) ; 

// forEach

allFruit.forEach(function(element){
    console.log(element)
}) ; 

// map() - creates a new array with the results of calling a provided function on every element in the calling array 

let numbers = [1,2,3,4,5] ; 

let squares = numbers.map(function(num){
    return (num*num) 
})

console.log(squares) ; 

// filter() - creates a new array with all elements that pass the test implemented by the provided function 

let evenNumbers = numbers.filter(function(num){
    return num % 2 == 0
})

console.log(evenNumbers) ; 

// reduce() - executes a reducer funnction (that you provide) on each element of the array, resulting in the single output value 

let sum = numbers.reduce(function(total, num){
    return (total+num)
},0) ; 

console.log(sum) ; 

// sort() 

// reverse()

// Nested Function 

