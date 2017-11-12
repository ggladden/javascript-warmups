function addUpTo(num) {
  if (typeof num !== 'number') return NaN;
  let result = 0;
  
  for (let i = 0; i <=num; i++) {
    result += i;
  }
  return result;
}

// Tests

const assert = require('assert');

describe('addUpTo()', function() {
  it('sum all numbers from 0 up to the argument', function() {
    assert.equal(addUpTo(3), 6);
    assert.equal(addUpTo(2), 3);
  });

  it('should sum only whole numbers', function() {
    assert.equal(addUpTo(5.9), 15);
  });

  it('should return 0 if the argument is less than 1', function() {
    assert.equal(addUpTo(-1), 0);
  });

  it('should return NaN if the argument is not a number', function() {
    assert.ok(isNaN(addUpTo('string')));
    assert.ok(isNaN(addUpTo(null)));
    assert.ok(isNaN(addUpTo([])));
  });
});
