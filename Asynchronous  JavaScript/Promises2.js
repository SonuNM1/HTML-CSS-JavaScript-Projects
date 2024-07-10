
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'] ;

// Create and Produce Promise

const friedRicePromise = new Promise((resolve, reject)=>{

    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice") ; 
    } else{
        reject("Couldn't do it") ; 
    }
})

// Consume Promise 

friedRicePromise
.then((myFriendRice)=>{
    console.log("Let's eat: ", myFriendRice);
})
.catch((error)=>{
    console.log(error);
})