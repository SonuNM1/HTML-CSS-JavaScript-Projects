
### JavaScript

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

- forEach: executes a function for each array element. Doesn't return a new array or any value. (Eg: logging values)

- map() : transforms each element of an array using a function and returns a new array with the transformed elements. 
        Eg - used to create a new array with squared values 

- reduce(): combines all elements of an array into single value using a function. Useful for aggregating or combining values. 
    Eg - used to calculate the sum of each element in the array 

- filter(): creates a new array with all the elements that pass the test implemeted by the provider function
    Eg - used to create a new array containing only even values 

- strict mode Vs non-strict mode 

- loops in javascript (for, for in, for of, while, do while)

- JavaScript Set and Maps

- Destructuring and Spread Operator

- JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined

- Why is JavaScript functions called type-1 citizen ? 

- Higher Order functions

- Hoisting in Function declarations Vs. Function expressions 

- Hoisting

- Arrow function 

- Callback function + Callback hell

- Bind (one object borrows method from another object) and Closures (A closure is a function having access to the parent scope, even after the parent function has closed.)

- Asynchronous JavaScript : Callbacks, async await, Promises 

- JavaScript Fetch API 

- JavaScript AJAX: AJAX is often implemented using the XMLHttpRequest object or the modern fetch API.

- Variables created without a declaration keyword (var, let, or const) are always global,
even if they are created inside a function.


### Asynchronous JavaScript 


- Is JavaScript a synchronous(single threaded) or asynchronous programming language? 

JavaScript is inherently synchronous, but it uses the event loop to handle asynchronous operations.

Web APIs allow JavaScript to perform non-blocking tasks.

Promises provide a better way to handle asynchronous operations compared to callbacks.

Async/Await syntax makes asynchronous code look and behave more like synchronous code, simplifying the handling of asynchronous operations.

- Callback Queue

- callback function + callback hell and Pyramind of DOM

- What is Promises in JavaScript, and why are they preferred over callbacks? How does "callback hell" occur, and what strategies can be used to avoid it? 

- JavaScript is a synchronous, single-threaded programming language. Explain 

- Fetch API 

- AJAX (Asynchronous JavaScript and XML)

- Axios 

- async await 

- Promises: [Promises.js](https://github.com/SonuNM1/HTML-CSS-JavaScript-Projects/blob/main/Asynchronous%20JavaScript/Promises.js)


- setTimeOut() - calls a function after a number of milliseconds. Executes a block of code after the specified time. Executes the code onl once. 

- clearTimeout(). What is the id returned by setTimeout()?

When setTimeout is called, it returns a unique timeout ID. This ID is a positive integer that uniquely identifies the scheduled timeout and can be used to manage it.

clearTimeout() cancels a timeout that was previously scheduled with setTimeout, using the timeout ID.

- What happens if we put provide '0' as the timeout parameter in setTimeout() ? 

When you provide 0 as the timeout parameter in setTimeout, the specified function will be executed as soon as possible after the current execution context and any currently pending tasks have completed. 

However, it will not be executed immediately. Instead, it is added to the event queue and will be executed after the current call stack is cleared.

Using 0 as the timeout parameter is often used to defer the execution of a function until the call stack is clear, allowing other synchronous code to run first.

- setInterval() and clearInterval() - execute a function repeatedly at specified intervals. 

Syntax: setTimeout(function, milliseconds) ;

Real-life use: We see that after spending some seconds/minutes on any website, a pop-up appears which asks for sign-in or login. 

- JavaScript Engine behind-the-scene: Event loop, Callstack, Callback Queue, Web API

- XHR Requests and HTTP Requests


### JavaScript DOM 


- HTML Collection

- Finding by HTML Element(by id, clas, tag, CSS Selectors-querySelector,querySelectorAll)

- Modifying HTML 

1. changing HTML Content using innerHTML:
    document.getElementById(id).innerHTML = new HTML

2. changing HTML attributes value:
    document.getElementById('myImage').src = 'landscape.jpg';
    document.getElementById('p2').style.color = 'blue' ; 

3. Modifying class in HTML
    element.classList.add('myStyle'); 
    element.classList.remove('myStyle'); 
    element.classList.toggle('myStyle'); 

- Creating and Appending HTML 

We can create a new element using the createElement() method of the document. We can append this new element (node) inside any other element. 

const para = document.createElement("p);
const element = document.getElementById('div1') ; 
element.appendChild(para) ; 


### CSS 

- Variables
- Utility class 