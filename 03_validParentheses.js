function validParentheses(parens) {
  if (parens === '') return true;
  if (parens[0] === ')' || parens.length % 2 !== 0) return false;
  
  return validParentheses(parens.replace(/\(\)/,''));
}

// Tests

const assert = require('assert');

describe('validParentheses', () => {
  it ('should return true if parens are balanced', () => {
    assert(validParentheses("()") === true);
    assert(validParentheses("(())((()())())") === true);
  });

  it ('should return false if parens are unbalanced', () => {
    assert(validParentheses(")") === false);
    assert(validParentheses("()()()()())()(") === false);
  });
});
