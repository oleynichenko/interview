/*
 * Create a function that checks if parentheses and brackets are correctly balanced in a string
 */

const { assert } = require(`./util`);
const braces = ['{', '}'];

function isBalanced(str) {
  let stack = [];

  for (let l of str) {
    if (braces.includes(l)) {
      if (l === braces[0]) {
        stack.unshift(l);
      } else {
        if (stack.length > 0) {
          stack.shift(1);
        } else {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}


assert(isBalanced('}{') === false);
assert(isBalanced('{{}') === false);
assert(isBalanced('{{}}') === true);
assert(isBalanced('{}{}') === true);
assert(isBalanced('foo { bar { baz } boo }') === true);
assert(isBalanced('foo { bar { baz }') === false);
assert(isBalanced('foo { bar } }') === false);