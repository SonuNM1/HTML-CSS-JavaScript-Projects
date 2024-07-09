
/*
Promises are a way to handle asynchronous operations in JavaScript. They provide a cleaner, more readable, and more manageable way to deal with asynchronous code compared to the traditional callbacks.

A promise is an object representing the eventual completion(or failure) of an asynchronous operation and its resulting value. 

A promise can be in one of 3 states - Pending, Fulfilled, Rejected 

To create a promise object, we use the Promise() constructor 

let promise = new Promise(function(resolve, reject){
    // code 
}) ; 

The Promise() constructor takes a function as an argument. The function also accepts two functions resolve() and reject() . 

If the promise returns successfully, the resolve() function is called. And if an error occurs, the reject() function is called. 
*/ 

const ticket = new Promise(function(resolve, reject){
    const isBoarded = false ; 
    if(isBoarded){
        resolve('You are not in the flight') ; 
    } else{
        reject('Your flight has been cancelled')
    }
})

/*
                USING A PROMISE

The then() method - used with callback when the promise is successfully fulfilled or resolved. 

The catch() method - used with the callback when the promise is rejected or if an error occurs. 

The finally() method - gets executed when the promise is either resolved successfully or rejected. 

*/

ticket.then((data)=>{
    console.log('Wooohoo', data);
}).catch((data)=>{
    console.log('Oh No! Shit', data);
})
.finally(()=>{
    console.log('I will always be executed');
})

// the data will consist of the data/value you have passed in the respective resolve or reject