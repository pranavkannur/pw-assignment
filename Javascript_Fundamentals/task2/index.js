function regexMatch(pattern, str) {
    const regex = new RegExp(pattern);
    return regex.test(str);
}

// Testing the function
console.log(regexMatch("abc", "abcdef")); // true
console.log(regexMatch("\\d", "abc"));    // false
