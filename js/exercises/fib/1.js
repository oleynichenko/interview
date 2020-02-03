/*
 * Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.
 * F_{0}=0, F_{1}=1, F_{n}=F_{n-1}+F_{n-2}.
 */

const { assert } = require(`../util`);

function fib(n) {
  if (n < 3) return n - 1;

  let a = 0;
  let b = 1;
  let c;

  for (let i = 0; i < n - 2; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return b;
}

assert(fib(1) === 0);
assert(fib(2) === 1);
assert(fib(3) === 1);
assert(fib(4) === 2);
assert(fib(10) === 34);

fib(5);