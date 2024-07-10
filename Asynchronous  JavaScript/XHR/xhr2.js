
const URL = "https://jsonplaceholder.typicode.com/posts" ; 


// Function to send an HTTP request using the specified method and URL. 

function sendRequest(method, url){
    return new Promise(function(resolve, reject){

        const xhr = new XMLHttpRequest() ; // Create a new XMLHttpRequest object 

        xhr.open(method, url) ; // Initialize the request with the specified method and URL 

        xhr.onload = function(){

            // When the request is successfully completed 

            if(xhr.status >= 200 && xhr.status < 300){

                // check if the status code indicates success 

                resolve(xhr.response) ; // resolve the promise with the response data 
            }
            else{

                // If the status code indicates failure 

                reject(new Error("Something went wrong")) ; // Reject the promise
            }
        }

        xhr.onerror = function(){

            // when there's an error with the request (e.g., network error )

            reject(new Error("Something went wrong")) ; // reject the promise with an error 
        }

        xhr.send() ; // send the request 

    })
}

// Send a GET request to the specified URL 

// Consuming the promise 

sendRequest('GET', URL)
.then(response=>{
    const data = JSON.parse(response) ; // Parse the JSON response data 
    console.log(data); // log the parsed data to the console 
})
.catch(error=>{
    console.error(error); // log any error that occur duing the request 
})