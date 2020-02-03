const { assert } = require(`./util`);

// Факториал определяется для целых неотрицательных чисел
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

assert(factorial(0) === 1);
assert(factorial(1) === 1);
assert(factorial(3) === 6);

