function collatzSequence(n, arr = [n]) {
  if (!Number.isInteger(n) || n <= 0)
    return "Input must be a positive whole number.";
    
  if (n === 1) return arr;

  let next = n % 2 ? n * 3 + 1 : n / 2;
  return collatzSequence(next, [...arr, next]);
}

// Tests

const assert = require('assert');

describe('collatzSequence', () => {
  it('should return the collatz sequnce for an integer n', () => {
    assert.deepEqual(collatzSequence(4), [4, 2, 1]);
    assert.deepEqual(collatzSequence(6), [6, 3, 10, 5, 16, 8, 4, 2, 1]);
  });

  it('should only accept a positive whole number as input', () => {
    assert(collatzSequence(''), 'Input must be a positive whole number.');
    assert(collatzSequence([]), 'Input must be a positive whole number.');
    assert(collatzSequence(NaN), 'Input must be a positive whole number.');
    assert(collatzSequence(0), 'Input must be a positive whole number.');
  });
});