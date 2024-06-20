const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should run number and return the sum', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
  });
  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1, -3), -4);
    assert.strictEqual(calculateNumber(-1.5, -3.5), -4); // Both round to nearest negative integer
    assert.strictEqual(calculateNumber(-1.6, -3.7), -6); // Both round to nearest negative integer
  });

  it('should handle mixed positive and negative numbers', () => {
    assert.strictEqual(calculateNumber(-1, 3), 2);
    assert.strictEqual(calculateNumber(1.2, -3.7), -3);
    assert.strictEqual(calculateNumber(-1.5, 3.5), 3);
  });

  it('should handle rounding of large numbers', () => {
    assert.strictEqual(calculateNumber(1000.4, 2000.5), 3001); // Rounds to 1000 and 2001
    assert.strictEqual(calculateNumber(1000.5, 2000.4), 3001); // Rounds to 1001 and 2000
  });

  it('should handle zero correctly', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
    assert.strictEqual(calculateNumber(0.5, 0.5), 2); // Rounds both to 1
  });
});
