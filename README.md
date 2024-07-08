
#### JavaScript

- Maps
- Filters
- Fetch API
- async await 
- promise

- var vs let. Why 'let' is preferred over 'var'?

var doesn't have a block-level scope. Function scoped. Accessible throughout the entire function. 

Variables declared with 'var' are hoisted to the top of their scope, meaning they can be accessed before they are declared, though they will be 'undefined' until their declaration is encountered. Variables declared with 'var' can be redeclared withitn the same scope without any error. 

function example(){
    console.log(x) ; // undefined (due to hoisting)
    var x = 10 ; 
    console.log(x) ; // 10 
}
example() ; 

let are block-scoped i.e. limited to the block, statement or expression where they are used. Reduces the chances of variable overwriting. 

Variables declared with 'let' are hoisted to the top of their block but are not initialized. Accessing them before declaration gives 'ReferenceError'. Variables declared with 'let' cannot be redeclared in the same scope. 

function example(){
    console.log(x) ; // ReferenceError: x is not defined
    let x = 10 ; 
    console.log(x) ; // 10 
}
example() ; 

While both let and var are hoisted, let variables are not initialized until their definition is encountered in the code. This means accessing them before declaration results in a ReferenceError, which helps prevent errors that can arise from using uninitialized variables.


- this keyword in JavaScript 

Refers to the context in which a function is called. The value of 'this' depends on how the function has been invoked. 

Global context: 'this' refers to the global object (window in browsers)
Object method: 'this' refers to object the method is called on
Regular function: 'this' refers to the global object in non-strict mode and undefined in strict mode
Arrow function: 'this' refers to the enclosing context 
Constructor function: 'this' refers to the new object being created


- HTML Events (onClick, onChange, onMouseover, onkeydown, onload)

- slice() Vs. splice()

- toString()

- map()

- filter()

- reduce()

- strict mode Vs non-strict mode 

#### CSS 

- Variables
- Utility class 