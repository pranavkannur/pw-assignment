// Problem 1: Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    };
}
// Problem 2: Employee constructor inheriting from Person
function Employee(name, age, designation) {
    Person.call(this, name, age); 

    this.designation = designation;

    this.getDetails = function() {
        console.log("Name: " + this.name + ", Age: " + this.age + ", Designation: " + this.designation);
    };
}
// Example usage:
var employeePranav = new Employee("Pranav", 20, "Software Developer");
employeePranav.sayHello(); // Output: Hello, my name is Pranav and I am 20 years old.
employeePranav.getDetails(); // Output: Name: Pranav, Age: 20, Designation: Software Developer
