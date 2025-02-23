function findCharacterClasses(str) {
    const digitPattern = /[0-9]/g;
    const upperPattern = /[A-Z]/g;
    const lowerPattern = /[a-z]/g;
    const specialPattern = /[!@#$%^&*(),.?":{}|<>]/g;

    return {
        digits: str.match(digitPattern) || [],
        uppercase: str.match(upperPattern) || [],
        lowercase: str.match(lowerPattern) || [],
        special: str.match(specialPattern) || []
    };
}

// Testing the function
console.log(findCharacterClasses("Hello 123!")); 
// Outputs: { digits: ['1', '2', '3'], uppercase: ['H'], lowercase: ['e', 'l', 'l', 'o'], special: ['!'] }
