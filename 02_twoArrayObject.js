function twoArrayObject(arr1, arr2) {
  const obj = {};
  arr1.forEach(function(e,i) {
    obj[e] = arr2[i] ? arr2[i] : null;
  });
  return obj;
}

// Tests

const assert = require('assert');

describe('twoArrayObject()', function() {
  let keys = ['a','b','c','d']
  let vals = [1, 2, 3, 4];
  let lessKeys = ['a','b','c'];
  let lessVals = [1, 2, 3];

  it('should combine two arrays into an object', function() {
    assert.deepEqual(twoArrayObject(keys, vals), { a: 1, b: 2, c: 3, d: 4 })
  });

  it('should create null values for extra keys', function() {
    assert.deepEqual(twoArrayObject(keys, lessVals), { a: 1, b: 2, c: 3, d: null })
  });

  it('should ignore extra values', function() {
    assert.deepEqual(twoArrayObject(lessKeys, vals), { a: 1, b: 2, c: 3 })
  });
});
