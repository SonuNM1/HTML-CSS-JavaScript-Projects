
let str = "Hello, World" ; 
console.log(str.length) ; 

// charAt() - returns the character at specified index 

console.log(str.charAt(0)) ; 

// indexOf() - returns the index of first occurence of specified index. If the value is not found, returns -1

// lastIndexOf() - returns the index of last occurence of a specified index. If the value is not found, returns -1

console.log(str.indexOf('o')) ; 

// includes() - checks if the string contains the specified value and returns 'true' or 'false'

console.log(str.includes('World')) ; 

// slice(start, end) - extracts a string and returns it as a new string. Similar to substring, but it can also accept negative values 

console.log(str.slice(0,5)) ; 

// toUpperCase(), toLowerCase()

console.log(str.toUpperCase()) ; 

// replace(searchValue, newValue)

console.log(str.replace('World', 'Universe')) ; 

// split() - splits the string into an array of substrings based on a specific separator 

console.log(str.split(",")) ; // Output: ['Hello', 'World']

// trim() - removes the trailing and leading space 

