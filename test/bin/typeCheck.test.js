const { isUndefined } = require('../../src/bin/typeCheck');

describe('typeCheck', () => {
  describe('isUndefined', () => {
    test('isUndefined should return true for undefined value', () => {
      expect(isUndefined(undefined)).toBeTruthy();
    });
    test('isUndefined should return true for null value', () => {
      expect(isUndefined(null)).toBeTruthy();
    });
    test('isUndefined should return true for empty string', () => {
      expect(isUndefined('')).toBeTruthy();
    });
    test('isUndefined should return false for non-empty string', () => {
      expect(isUndefined('somestring')).toBeFalsy();
    });
    test('isUndefined should return false for numbers', () => {
      expect(isUndefined(12)).toBeFalsy();
    });
  });
});
