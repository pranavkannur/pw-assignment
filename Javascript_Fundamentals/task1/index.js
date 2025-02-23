function outerFunction(parameter) {
    const innerVariable = "I am inside outerFunction";

    return function innerFunction() {
        console.log("Parameter from outerFunction: " + parameter);
        console.log("Variable from outerFunction: " + innerVariable);
    };
}

// Usage
const innerFunc = outerFunction("Hello");
innerFunc(); // Outputs: Parameter from outerFunction: Hello, Variable from outerFunction: I am inside outerFunction
