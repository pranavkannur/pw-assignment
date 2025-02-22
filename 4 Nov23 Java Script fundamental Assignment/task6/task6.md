## Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/height * height.

```javascript
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Example usage:
let weight = 70; // Weight in kg
let height = 1.75; // Height in meters
let bmi = calculateBMI(weight, height);
console.log("Body Mass Index:", bmi); // Output: Body Mass Index: 22.86

```