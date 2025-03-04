class Shape {
    draw() {
        throw new Error("Subclass must implement abstract method");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a Circle");
    }
}

class Rectangle extends Shape {
    draw() {
        console.log("Drawing a Rectangle");
    }
}

// Function to demonstrate polymorphism
function drawShape(shape) {
    shape.draw();
}

// Create instances of Circle and Rectangle
const circle = new Circle();
const rectangle = new Rectangle();

// Demonstrate polymorphism
drawShape(circle);
drawShape(rectangle);
