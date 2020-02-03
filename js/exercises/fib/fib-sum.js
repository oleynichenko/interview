/*
 * Реализуйте функцию fib(), возвращающую сумму n чисел Фибоначчи.
 * F_{0}=0, F_{1}=1, F_{n}=F_{n-1}+F_{n-2}.
 */
const assert = require('assert');

function fibSum(n) {
  if (n <= 2) return n - 1;

  let a = 0;
  let b = 1;
  let c;
  let sum = 1;

  for (i = 1; i <= n - 2; i++) {
    c = a + b;
    sum = sum + c;
    a = b;
    b = c;
  }

  return sum;
}
// 0,1,1,2,3,5,8,13
assert.equal(fibSum(1), 0);
assert.equal(fibSum(2), 1);
assert.equal(fibSum(3), 2);
assert.equal(fibSum(4), 4);
assert.equal(fibSum(5), 7);
assert.equal(fibSum(6), 12);
