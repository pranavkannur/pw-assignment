# Declaring Variables in JavaScript

## Purpose of Declaring Variables

1. **Store Data**: Variables act as containers for storing data values, which can be anything from numbers, strings, objects, and more.
2. **Code Reusability**: By using variables, you can reuse the stored data throughout your code without having to repeat the same values multiple times.
3. **Maintain Code Readability and Manageability**: Variables help make your code more readable and easier to manage by giving meaningful names to data values, which provides context to what the data represents.

## Declaring Variables Using the 'let' Keyword

You can declare variables using the let keyword in JavaScript. The let keyword is used to create block-scoped variables. Here's how you can do it:

```javascript
let variableName = value;
```

**For Example**

```javascript
let age = 25; // Declares a variable named 'age' with the value of 25
let name = "Alice"; // Declares a variable named 'name' with the value "Alice"
```
Variables declared with let are limited to the block, statement, or expression where they are defined, which helps to avoid issues with variable scoping in larger codebases.