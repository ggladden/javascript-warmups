function snail(arr, newArr=[]){
  if (arr.length === 0 ) return newArr;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      while (arr[i].length) {
        newArr.push(arr[i].shift());
      }
    }
    if (arr[i].length) {
        newArr.push(arr[i].pop());
      }
  }
  for (let i = arr.length-1; i > 0; i--) {
    if (i === arr.length-1) {
      while (arr[i].length) {
        newArr.push(arr[i].pop());
      }
    }
    if (arr[i].length) {
        newArr.push(arr[i].shift());
    }
  }
  return snail(arr.filter((a) => a.length > 0), newArr);
}

// Tests

const assert = require('assert');

describe('snail', () => {
  it ('convert a 2d array to a single array with elements rotated from the outside in going clockwise', () => {
    assert.deepEqual(snail([[1,2,3],[4,5,6],[7,8,9]]), [1,2,3,6,9,8,7,4,5]);
    assert.deepEqual(snail([[1,2,3], [8,9,4], [7,6,5]]), [1,2,3,4,5,6,7,8,9]);
  });
});