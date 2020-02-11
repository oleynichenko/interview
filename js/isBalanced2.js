const { assert } = require(`./util`);

const brackets = [['{', '}'], ['[', ']'], ['(', ')']];

function isBracket(char) {
  for(let set of brackets) {
    if (set.includes(char)) {
      return true;
    }
  }

  return false;
}

function isOpenBracket(char) {
  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i][0] === char) {
      return true;
    }
  }

  return false;
}

function matchBrackets(char, bracket) {
  for(let set of brackets) {
    if (set[1] === bracket) {
      return char === set[0];
    }
  }

  return false;
}

function isBalanced2(str) {
  const stack = [];

  for(let char of str) {
    if (isBracket(char)) {
      if (isOpenBracket(char)) {
        stack.unshift(char);
      } else {
        if (matchBrackets(stack[0], char)) {
          stack.shift(1);
        } else {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}

assert(isBalanced2('(foo { bar (baz) [boo] })') === true);
assert(isBalanced2('({()[]})') === true);
assert(isBalanced2('([[]{}])') === true);
assert(isBalanced2('((') === false);
assert(isBalanced2('(') === false);
assert(isBalanced2('foo { bar { baz }') === false);
assert(isBalanced2('foo { (bar [baz] } )') === false);

// assert(isBracket('*') === false);
// assert(isBracket('{') === true);

// assert(matchBrackets('{', '}') === true);
// assert(matchBrackets('[', ']') === true);
// assert(matchBrackets('v', 'a') === false);

// assert(isOpenBracket('}') === false);
// assert(isOpenBracket('[') === true);
// assert(isOpenBracket('d') === false);
// assert(isOpenBracket('') === false);