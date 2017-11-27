function nonRepeatSubstring(string) {
  chars = Array.from(new Set(string)).join('');
  for (let i = chars.length; i >= 0; i--) {
    chars = chars.slice(0, i);
    pattern = new RegExp(chars);
    if (string.match(pattern)) return chars;
  }
}

// Tests

const assert = require('assert');

describe('nonRepeatSubstring', function () {
  it('should return the longest substring that has no consecutive repeating characters', function () {
    assert(nonRepeatSubstring('abb'), 'ab');
    assert(nonRepeatSubstring('abccde'), 'abc');
    assert(nonRepeatSubstring('aaaabbbb'), 'ab');
  })
})