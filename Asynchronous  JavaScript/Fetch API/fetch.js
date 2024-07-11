
const URL = "https://jsonplaceholder.typicode.com/posts" ; 

/*
const whatisthis = fetch(URL)
console.log(whatisthis); // returns promise
*/

fetch(URL, {
    method: "POST",
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json: charset=UTF-8',
    },
})
.then(response=>{
    if(response.ok){
        return response.json() ;
    } else {
        throw new Error("Something went wrong") ; 
    } 
})
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.log("Inside catch");
    console.log(error);
})
