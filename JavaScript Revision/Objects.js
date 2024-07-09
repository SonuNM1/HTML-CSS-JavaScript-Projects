
// singleton

// object literals 

const mySym = Symbol("Key1") ; 

const JSuser = {
    name: "Sonu",
    "full name": "Sonu N Mahto", 
    [mySym]: "Symbol example",
    age: 24,
    location: "Delhi",
    email: "sonu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] 
} ; 

// accessing object elements 

/*
console.log(JSuser.email) ; 
console.log(JSuser["email"]) ; 

console.log(JSuser["full name"]) ; 
console.log(JSuser[mySym])  ;
*/

// changing value 

JSuser.email = "sonu@chatgpt.com" ; 

// freezing values 

// Object.freeze(JSuser) ; 

JSuser.greeting = function(){
    console.log('hello js user')
}

console.log(JSuser.greeting())