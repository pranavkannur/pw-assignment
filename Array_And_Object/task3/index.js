// Step a: Prevent any further additions of properties to the student object
let student = {
    name: 'John',
    age: 21
};
Object.preventExtensions(student);

// Step b: Check if the student object is extensible and store the result in a variable called extensibleStatus
let extensibleStatus = Object.isExtensible(student);

// Step c: Create a new object called teacher with a 'subject' property set to 'Math'
let teacher = {
    subject: 'Math'
};

// Step d: Seal the teacher object, preventing any additions or deletions of properties
Object.seal(teacher);

// Step e: Check if the teacher object is sealed and store the result in a variable called sealedStatus
let sealedStatus = Object.isSealed(teacher);

// Step f: Print the extensibleStatus and sealedStatus to the console
console.log('Is student object extensible?', extensibleStatus); // false
console.log('Is teacher object sealed?', sealedStatus); // true
