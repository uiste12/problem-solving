let a = 5;
console.log(`the value is ${a} `);

let v= "World";
console.log(`Hello ${v}`);

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