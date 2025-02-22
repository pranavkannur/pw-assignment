## Q7. Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use appropriatearithmetic operators.
```javascript
function calculateAreaOfCircle(radius) {
    return Math.PI * radius * radius;
}

// Example usage:
let radius = 10; // Radius of the circle
let area = calculateAreaOfCircle(radius);
console.log("Area of Circle:", area.toFixed(2)); // Output: Area of Circle: 314.16

```