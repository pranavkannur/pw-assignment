function extractDateParts(pattern, str) {
    const regex = new RegExp(pattern);
    const match = str.match(regex);

    if (match) {
        return {
            day: match[1],
            month: match[2],
            year: match[3]
        };
    }
    return null;
}

// Example usage for a date in "DD-MM-YYYY" format
const datePattern = "(\\d{2})-(\\d{2})-(\\d{4})";
console.log(extractDateParts(datePattern, "25-12-2023"));
// Outputs: { day: '25', month: '12', year: '2023' }
