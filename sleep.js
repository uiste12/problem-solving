//synchronous code
let a = 5;
console.log(`the value is ${a} `);
// merge branch => add files => commit with cmts => optionel "pull changes from origin before pushing yours" =>  push 
let v= "World";
console.log(`Hello ${v}`);

//asynchronous code
function sleep(millis) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Executed after some seconds");
        resolve(`Slept for ${millis} milliseconds`);
      }, millis);
    });
  }
  
  // Example usage with .then()
  sleep(2000)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error("Error:", error);
    });