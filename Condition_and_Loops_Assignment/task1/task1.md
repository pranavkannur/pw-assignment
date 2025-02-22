# Conditional Statements in JavaScript

Conditional statements, also known as "if-else" statements, allow your program to make decisions and execute different code based on whether a condition is true or false.

## Syntax

Here's the basic syntax for an if-else statement in JavaScript:

```javascript
if (condition) {
    // code to execute if the condition is true
} else {
    // code to execute if the condition is false
}
```
## Example
Let's check if a number is positive or negative:
```javascript
let number = 10;

if (number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is negative.");
}
```
In this example, the condition number > 0 is checked. If the condition is true (i.e., if the number is positive), the program will print "The number is positive." If the condition is false (i.e., if the number is negative), the program will print "The number is negative."

## Conditions using using else if:
```javascript
let number = -5;

if (number > 0) {
    console.log("The number is positive.");
} else if (number === 0) {
    console.log("The number is zero.");
} else {
    console.log("The number is negative.");
}
```
Here, the program checks if the number is positive first, if it's not, then checks if it's zero, and if it's neither positive nor zero, it concludes that the number is negative.
