
## Q5: Write a JavaScript program that calculates simple interest.
```javascript
function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

// Example usage:
let principal = 1000; // Principal amount in $
let rate = 5; // Interest rate in %
let time = 3; // Time in years
let interest = calculateSimpleInterest(principal, rate, time);
console.log("Simple Interest:", interest); 
// Output: Simple Interest: 150
