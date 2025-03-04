function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    };
}

// Example usage:
var pranav = new Person("Pranav", 20);
pranav.sayHello(); // Output: Hello, my name is Pranav and I am 20 years old.
