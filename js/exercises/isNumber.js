const { assert } = require(`./util`);
/*
 * Checks if a passed value is type of number except NaN, Infinity, -Infinity
 */

function isNumber(n) {
  return typeof(n) === "number" && isFinite(n);
}

assert(isNumber(3.2) === true);
assert(isNumber(`text`) === false);
assert(isNumber(`0`) === false);
assert(isNumber(NaN) === false);
assert(isNumber(Infinity) === false);
assert(isNumber(null) === false);