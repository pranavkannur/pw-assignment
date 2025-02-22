const num1 = 1;
const num2 = 99;

const generateNumbers = (start, end) => {
    let numbers = [];
    for (let i = start + 1; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
};

console.log(generateNumbers(num1, num2));