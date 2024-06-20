// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.8), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.5), 6);
    });

    it('should handle negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
      assert.strictEqual(calculateNumber('SUM', -1.7, 4.2), 2);
    });

    it('should handle zero correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('sUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 4.7, 2.2), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.5), 3);
    });

    it('should handle negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', -4.5, 2.2), -6);
    });

    it('should handle zero correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('dIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 2.2), 2.5);
      assert.strictEqual(calculateNumber('DIVIDE', 7.5, 3.5), 2);
    });

    it('should handle division by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
    });

    it('should handle negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -4.5, 2.2), -2);
      assert.strictEqual(calculateNumber('DIVIDE', 4.7, -1.2), -5);
    });

    it('should handle zero correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 5), 0);
    });
  });
});
