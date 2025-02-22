function calculateTax() {
    // Define the tax rates and income ranges using a closure
    const taxRates = [
      { range: [0, 10000], rate: 0.1 },
      { range: [10001, 30000], rate: 0.15 },
      { range: [30001, 60000], rate: 0.22 },
      { range: [60001, Infinity], rate: 0.3 },
    ];
  
    // Return a function that calculates the tax based on the income
    return function (income) {
      let tax = 0;
      for (const { range, rate } of taxRates) {
        if (income > range[0]) {
          const taxableAmount = Math.min(income, range[1]) - range[0];
          tax += taxableAmount * rate;
        }
      }
      return tax;
    };
  }
  
  // Create the tax calculator function
  const taxCalculator = calculateTax();
  
  // Test the function with various incomes
  console.log(taxCalculator(5000)); // Income: 5000, Expected Tax: 500
  console.log(taxCalculator(15000)); // Income: 15000, Expected Tax: 1749.85
  console.log(taxCalculator(40000)); // Income: 40000, Expected Tax: 6199.63
  console.log(taxCalculator(80000)); // Income: 80000, Expected Tax: 16599.33
  