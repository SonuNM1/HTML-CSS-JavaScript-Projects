
const URL = "https://jsonplaceholder.typicode.com/posts"

/*
const xhr = new XMLHttpRequest() ; 
// console.log(xhr);

// STEP 1 

// console.log(xhr.readyState); // before open() -> readyState status 0 

xhr.open("GET", URL) ;

// console.log(xhr.readyState); // after open() -> readyState status 1 

xhr.onreadystatechange = function(){
//    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const response = xhr.response ; 
        const data = JSON.parse(response) ; 
        console.log(data);
    }
}

xhr.send() ; 
*/

const xhr = new XMLHttpRequest() ; 

xhr.open("GET", URL) ; 

xhr.onload=()=>{
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response) ; 
        // console.log(data); 
        const id = data[3].id ; 
        console.log(id);

        const xhr2 = new XMLHttpRequest() ; 
        const URL2 = `${URL}/${id}`
        console.log(URL2);
        xhr2.open("GET", URL2) ; 

        xhr2.onload=()=>{
            const data2 = JSON.parse(xhr2.response) ; 
            console.log(data2);
        }

        xhr2.send() ; 
    }
    else{
        console.log("Something went wrong");
    }
}

xhr.error=()=>{
    console.log("Network Error");
}

xhr.send() ; 
