//synchronous code
let a = 5;
console.log(`the value is ${a} `);
// merge branch => add files => commit with cmts => optionel "pull changes from origin before pushing yours" =>  push 
let v= "World";
console.log(`Hello ${v}`);

//asynchronous code
function sleep(millis) {
    return new Promise((resolve, reject) => { //callback function : passing function as argument
        if (millis> 5000){
            const errormessage="Sleep time exceeds 5000 milliseconds";
            reject(errormessage);}
        else
      setTimeout(() => {//call back function
        console.log("Executed after some seconds");
        resolve(`Slept for ${millis} milliseconds`);
      }, millis);
    });
  }
  
  // Example usage with .then()
  sleep(6000)
    .then(result => {  // handling the output of promises
      console.log(result);
    })
    .catch(error => {
      console.error("Error:", error);
    });