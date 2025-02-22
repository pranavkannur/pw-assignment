function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

// Testing the function with different inputs
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
console.log(factorial(7)); // Output: 5040 (7! = 7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040)
console.log(factorial(10)); // Output: 3628800 (10! = 10 * 9 * 8 * ... * 1 = 3628800)