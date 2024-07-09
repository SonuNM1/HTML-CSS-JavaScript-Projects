
/*
console.log("Hello");

setTimeout(function(){
    console.log("This will execute later")
}, 3000) ; 

console.log("World");
console.log("Sonu N Mahto");
*/

function getCake(callback){
    setTimeout(()=>{
        const cake = "🎂"
        console.log("Here is your cake: ", cake);
        callback(cake) ;  
    }, 2000);
}

function putCherry(cake, callback){
    setTimeout(() => {
        const cherry = "🎶" ; 
        console.log("Here is your cherry on cake: ", cherry);
        callback(cherry) ; 
    }, 2000);
}

getCake((cake)=>{
    console.log('Got the cake:', cake);
})

getCherry(()=>{
    console.log("Got the cherry on cake: ", cherry);
})
