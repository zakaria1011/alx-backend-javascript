// 1-calcul.test.js

const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5), 6);
      expect(calculateNumber('SUM', 1.2, 3.8), 5);
      expect(calculateNumber('SUM', 1.5, 3.5), 6);
    });

    it('should handle negative numbers correctly', () => {
      expect(calculateNumber('SUM', -1.4, -4.5), -5);
      expect(calculateNumber('SUM', -1.7, 4.2), 2);
    });

    it('should handle zero correctly', () => {
      expect(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('sUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      expect(calculateNumber('SUBTRACT', 4.7, 2.2), 3);
      expect(calculateNumber('SUBTRACT', 5.5, 2.5), 3);
    });

    it('should handle negative numbers correctly', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
      expect(calculateNumber('SUBTRACT', -4.5, 2.2), -6);
    });

    it('should handle zero correctly', () => {
      expect(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('dIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      expect(calculateNumber('DIVIDE', 4.5, 2.2), 2.5);
      expect(calculateNumber('DIVIDE', 7.5, 3.5), 2);
    });

    it('should handle division by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      expect(calculateNumber('DIVIDE', 5, 0), 'Error');
    });

    it('should handle negative numbers correctly', () => {
      expect(calculateNumber('DIVIDE', -4.5, 2.2), -2);
      expect(calculateNumber('DIVIDE', 4.7, -1.2), -5);
    });

    it('should handle zero correctly', () => {
      expect(calculateNumber('DIVIDE', 0, 5), 0);
    });
  });
});
