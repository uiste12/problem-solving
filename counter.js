//callback: pass function as argument
//closure:  return function

let createCounter = function(n) {
    // Initialize the counter value
    let counterValue = n;

    // Define the inner counter function
    return function() {
        // Capture the current value
        const current = counterValue;
        
        // Increment the counter for the next call
        counterValue += 1;

        // Return the current value
        return current;
    };
};

// Example usage:
let n = 10;
let counterFunction = createCounter(n);

// Call the counter function multiple times
console.log(counterFunction()); // Output: 10
console.log(counterFunction()); // Output: 11
console.log(counterFunction()); // Output: 12
console.log(counterFunction()); // Output: 13
