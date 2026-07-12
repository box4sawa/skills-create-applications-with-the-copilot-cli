#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

class Calculator {
  /**
   * Addition operation
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtraction operation
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplication operation
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Division operation
   * @param {number} a - Dividend
   * @param {number} b - Divisor
   * @returns {number} Quotient of a and b
   * @throws {Error} If dividing by zero
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Error: Division by zero is not allowed');
    }
    return a / b;
  }
}

module.exports = Calculator;

// Only run CLI when this file is executed directly
if (require.main === module) {
  // Create calculator instance
  const calculator = new Calculator();

  // Parse command-line arguments
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Usage: calculator.js <number1> <operation> <number2>');
    console.log('');
    console.log('Operations:');
    console.log('  +  Addition');
    console.log('  -  Subtraction');
    console.log('  *  Multiplication');
    console.log('  /  Division');
    console.log('');
    console.log('Examples:');
    console.log('  calculator.js 10 + 5');
    console.log('  calculator.js 20 - 8');
    console.log('  calculator.js 4 * 3');
    console.log('  calculator.js 15 / 3');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1];
  const num2 = parseFloat(args[2]);

  // Validate inputs
  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both inputs must be valid numbers');
    process.exit(1);
  }

  let result;

  try {
    switch (operation) {
      case '+':
        result = calculator.add(num1, num2);
        break;
      case '-':
        result = calculator.subtract(num1, num2);
        break;
      case '*':
        result = calculator.multiply(num1, num2);
        break;
      case '/':
        result = calculator.divide(num1, num2);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'. Supported operations are: +, -, *, /`);
        process.exit(1);
    }

    console.log(`${num1} ${operation} ${num2} = ${result}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
