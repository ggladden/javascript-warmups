function pivotIndex(arr) {
  let total = arr.reduce((acc, val) => acc + val);
  let leftSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (total - leftSum - arr[i] === leftSum) return i;
    leftSum += arr[i];
  }
  return -1;
}

// Tests

const assert = require('assert')

describe('pivotIndex', function () {
  it('should return the pivot index', function () {
    assert(pivotIndex([1, 2, 1, 6, 3, 1]), 3);
  });

  it('should return -1 if there is no valid pivot index', function () {
    assert(pivotIndex([5, 2, 7]), -1);
  });

  it('should return the smallest pivot if more than one', function () {
    assert(pivotIndex([-1, 3, -3, 2]), 1);
  });
})
