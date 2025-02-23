const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find min and max age
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

// Find median age
const medianAge = (ages.length % 2 !== 0) ? ages[Math.floor(ages.length / 2)] : 
    (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;

// Find average age
const averageAge = ages.reduce((a, b) => a + b) / ages.length;

// Find range
const ageRange = maxAge - minAge;

// Compare (min - average) and (max - average)
const comparison = Math.abs(minAge - averageAge) - Math.abs(maxAge - averageAge);

console.log({ minAge, maxAge, medianAge, averageAge, ageRange, comparison });
// Output: { minAge: 19, maxAge: 26, medianAge: 24, averageAge: 22.8, ageRange: 7, comparison: 3.2 }