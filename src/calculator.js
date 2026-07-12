#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (**)
 * - Square Root (sqrt)
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

  /**
   * Modulo operation
   * @param {number} a - Dividend
   * @param {number} b - Divisor
   * @returns {number} Remainder of a divided by b
   * @throws {Error} If divisor is zero
   */
  modulo(a, b) {
    if (b === 0) {
      throw new Error('Error: Modulo by zero is not allowed');
    }
    return a % b;
  }

  /**
   * Exponentiation operation
   * @param {number} a - Base
   * @param {number} b - Exponent
   * @returns {number} a raised to the power of b
   */
  exponentiate(a, b) {
    return Math.pow(a, b);
  }

  /**
   * Square root operation
   * @param {number} a - Number to find the square root of
   * @returns {number} Square root of a
   * @throws {Error} If the number is negative
   */
  sqrt(a) {
    if (a < 0) {
      throw new Error('Error: Square root of a negative number is not allowed');
    }
    return Math.sqrt(a);
  }
}

module.exports = Calculator;

// Only run CLI when this file is executed directly
if (require.main === module) {
  // Create calculator instance
  const calculator = new Calculator();

  // Parse command-line arguments
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Usage: calculator.js <number1> <operation> <number2>');
    console.log('       calculator.js <number1> sqrt');
    console.log('');
    console.log('Operations:');
    console.log('  +     Addition');
    console.log('  -     Subtraction');
    console.log('  *     Multiplication');
    console.log('  /     Division');
    console.log('  %     Modulo');
    console.log('  **    Exponentiation');
    console.log('  sqrt  Square Root (single argument)');
    console.log('');
    console.log('Examples:');
    console.log('  calculator.js 10 + 5');
    console.log('  calculator.js 20 - 8');
    console.log('  calculator.js 4 * 3');
    console.log('  calculator.js 15 / 3');
    console.log('  calculator.js 17 % 5');
    console.log('  calculator.js 2 ** 8');
    console.log('  calculator.js 16 sqrt');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1];

  // Validate first input
  if (isNaN(num1)) {
    console.error('Error: First input must be a valid number');
    process.exit(1);
  }

  let result;

  try {
    if (operation === 'sqrt') {
      result = calculator.sqrt(num1);
      console.log(`sqrt(${num1}) = ${result}`);
    } else {
      if (args.length < 3) {
        console.error(`Error: Operation '${operation}' requires two numbers`);
        process.exit(1);
      }
      const num2 = parseFloat(args[2]);
      if (isNaN(num2)) {
        console.error('Error: Second input must be a valid number');
        process.exit(1);
      }
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
        case '%':
          result = calculator.modulo(num1, num2);
          break;
        case '**':
          result = calculator.exponentiate(num1, num2);
          break;
        default:
          console.error(`Error: Unknown operation '${operation}'. Supported operations are: +, -, *, /, %, **, sqrt`);
          process.exit(1);
      }
      console.log(`${num1} ${operation} ${num2} = ${result}`);
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
