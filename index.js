// Define variables num1 and num2
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

// Define variable random to generate a random integer greater than 0
const random = Math.floor(Math.random() * 100) + 1;

// Define variables num3 and num4
const num3 = 54;
const num4 = 10;
const mod = num3 % num4;

// Define an array of numbers
const numbers = [10, 20, 15, 5];
const max = Math.max(...numbers);

// Export variables for testing
module.exports = { num1, num2, multiply, random, num3, num4, mod, max };
