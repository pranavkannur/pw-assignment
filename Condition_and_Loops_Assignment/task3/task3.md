# Understanding Loops in JavaScript

## What are Loops and Why Do We Need Them?
Loops are control structures used in programming to execute a block of code repeatedly based on a condition. They help automate repetitive tasks and manage large amounts of data efficiently.

## Types of Loops in JavaScript

### 1. For Loop
Executes a block of code a specific number of times.

**Syntax:**
```javascript
for (let i = start; i < end; i++) {
    // code to be executed
}
```
**Exmaple:**
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```
### 2. While Loop
Executes a block of code as long as a specified condition is true.

**Syntax**
```javascript
while (condition) {
    // code to be executed
}
```
**Example**
```javascript
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
```
### 3. Do-While Loop
Similar to a while loop, but the condition is checked after the code block is executed.

**Syntax:**
```javascript
do {
    // code to be executed
} while (condition);
```
**Example**
```javascript
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
```
### 4. For-Each loop
Executes a block of code for each element in an array.

**Syntax**
```javascript 
larray.forEach(function(element) {
    // code to be executed
});
```
**Example**
```javascript
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

