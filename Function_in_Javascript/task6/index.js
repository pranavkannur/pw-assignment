// Curry function implementation
function curry(fn) {
    return function curried(...args) {
        // If all required arguments are provided, execute the original function
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            // Otherwise, return a new function to collect more arguments
            return function(...moreArgs) {
                return curried.apply(this, args.concat(moreArgs));
            };
        }
    };
}

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Create a curried version of the add function
const curriedAdd = curry(add);

// Test the curried function
console.log(curriedAdd(2)(3)); // Output: 5
console.log(curriedAdd(2, 3)); // Output: 5
console.log(curriedAdd(2)(3, 4)); // Output: 5 