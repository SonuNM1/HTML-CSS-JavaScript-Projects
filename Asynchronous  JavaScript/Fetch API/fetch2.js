
const URL = "https://jsonplaceholder.typicode.com/posts" ;

/*
fetch(URL)
    .then(response=>{
        return response.json() ; 
    })
    .then(data=>{
        console.log(data);
    })
*/

async function getPosts(){
    const response = await fetch(URL) ;
    if(!response.ok){
        throw new Error("Something went wrong")
    } 
   const data = await response.json()
   return data ; 
}

// const myData = getPosts() ; 
// console.log(myData);

getPosts()
    .then(myData=>{
        console.log(myData);
    })
    .catch(error=>{
        console.log("Inside catch");
        console.log(error);
    })

