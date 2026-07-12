const Calculator = require('../calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('should add a positive and negative number', () => {
      expect(calculator.add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(calculator.add(1.5, 2.5)).toBe(4);
    });

    test('should add large numbers', () => {
      expect(calculator.add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in a negative number', () => {
      expect(calculator.subtract(3, 8)).toBe(-5);
    });

    test('should subtract two negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('should subtract a positive from a negative number', () => {
      expect(calculator.subtract(-10, 5)).toBe(-15);
    });

    test('should subtract zero from a number', () => {
      expect(calculator.subtract(7, 0)).toBe(7);
    });

    test('should subtract a number from itself', () => {
      expect(calculator.subtract(5, 5)).toBe(0);
    });

    test('should subtract decimal numbers', () => {
      expect(calculator.subtract(5.5, 2.3)).toBeCloseTo(3.2);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply resulting in zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('should multiply two negative numbers', () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
    });

    test('should multiply a positive and negative number', () => {
      expect(calculator.multiply(7, -2)).toBe(-14);
    });

    test('should multiply one by a number', () => {
      expect(calculator.multiply(1, 42)).toBe(42);
    });

    test('should multiply decimal numbers', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers', () => {
      expect(calculator.multiply(1000, 2000)).toBe(2000000);
    });

    test('should multiply by one', () => {
      expect(calculator.multiply(999, 1)).toBe(999);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide resulting in a decimal', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.333333, 5);
    });

    test('should divide two negative numbers', () => {
      expect(calculator.divide(-20, -5)).toBe(4);
    });

    test('should divide a positive and negative number', () => {
      expect(calculator.divide(-15, 3)).toBe(-5);
    });

    test('should divide zero by a number', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    test('should divide a number by one', () => {
      expect(calculator.divide(42, 1)).toBe(42);
    });

    test('should divide decimal numbers', () => {
      expect(calculator.divide(10.5, 2.5)).toBeCloseTo(4.2);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Error: Division by zero is not allowed');
    });

    test('should throw error when dividing any number by zero', () => {
      expect(() => calculator.divide(0, 0)).toThrow('Error: Division by zero is not allowed');
    });

    test('should throw error when dividing negative number by zero', () => {
      expect(() => calculator.divide(-5, 0)).toThrow('Error: Division by zero is not allowed');
    });
  });

  describe('Modulo', () => {
    test('should return remainder of two positive numbers', () => {
      expect(calculator.modulo(17, 5)).toBe(2);
    });

    test('should return zero when divisible evenly', () => {
      expect(calculator.modulo(10, 2)).toBe(0);
    });

    test('should handle negative dividend', () => {
      expect(calculator.modulo(-7, 3)).toBe(-1);
    });

    test('should handle negative divisor', () => {
      expect(calculator.modulo(7, -3)).toBe(1);
    });

    test('should handle decimal numbers', () => {
      expect(calculator.modulo(5.5, 2)).toBeCloseTo(1.5);
    });

    test('should throw error when divisor is zero', () => {
      expect(() => calculator.modulo(10, 0)).toThrow('Error: Modulo by zero is not allowed');
    });

    test('should throw error when both arguments are zero', () => {
      expect(() => calculator.modulo(0, 0)).toThrow('Error: Modulo by zero is not allowed');
    });
  });

  describe('Exponentiation', () => {
    test('should raise a number to a positive power', () => {
      expect(calculator.exponentiate(2, 8)).toBe(256);
    });

    test('should return 1 when exponent is zero', () => {
      expect(calculator.exponentiate(5, 0)).toBe(1);
    });

    test('should return the base when exponent is one', () => {
      expect(calculator.exponentiate(7, 1)).toBe(7);
    });

    test('should handle negative exponent', () => {
      expect(calculator.exponentiate(2, -2)).toBe(0.25);
    });

    test('should handle fractional exponent', () => {
      expect(calculator.exponentiate(4, 0.5)).toBe(2);
    });

    test('should return 0 when base is zero', () => {
      expect(calculator.exponentiate(0, 5)).toBe(0);
    });

    test('should handle negative base with even exponent', () => {
      expect(calculator.exponentiate(-3, 2)).toBe(9);
    });
  });

  describe('Square Root', () => {
    test('should return square root of a perfect square', () => {
      expect(calculator.sqrt(16)).toBe(4);
    });

    test('should return square root of zero', () => {
      expect(calculator.sqrt(0)).toBe(0);
    });

    test('should return square root of a non-perfect square', () => {
      expect(calculator.sqrt(2)).toBeCloseTo(1.41421, 5);
    });

    test('should return square root of a decimal number', () => {
      expect(calculator.sqrt(0.25)).toBe(0.5);
    });

    test('should throw error for negative number', () => {
      expect(() => calculator.sqrt(-1)).toThrow('Error: Square root of a negative number is not allowed');
    });

    test('should throw error for any negative number', () => {
      expect(() => calculator.sqrt(-100)).toThrow('Error: Square root of a negative number is not allowed');
    });
  });

  describe('Image Examples - calc-basic-operations.png', () => {
    test('should calculate 2 + 3 = 5', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should calculate 10 - 4 = 6', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should calculate 45 * 2 = 90', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should calculate 20 / 5 = 4', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });
  });

  describe('Edge Cases and Special Values', () => {
    test('should handle very small decimal numbers in addition', () => {
      expect(calculator.add(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    test('should handle very large numbers in multiplication', () => {
      expect(calculator.multiply(999999, 999999)).toBe(999998000001);
    });

    test('should handle negative zero', () => {
      expect(calculator.add(-0, 5)).toBe(5);
    });

    test('should handle fractional results in division', () => {
      expect(calculator.divide(1, 3)).toBeCloseTo(0.333333, 5);
    });
  });
});
