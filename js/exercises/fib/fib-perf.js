const {
  performance
} = require('perf_hooks');

function fib1(n) {
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

var fibonacciMemo = function() {
  var memo = {};

  return function f(n) {
    var value;

    if (n in memo) {
      value = memo[n];
    } else {
      value = (n === 1 || n === 2)
        ? n - 1
        : f(n - 1) + f(n - 2);

      memo[n] = value;
    }

    return value;
  }
};

const fib2 = fibonacciMemo();

const p1 = performance.now();
fib1(1000);
console.log((performance.now() - p1) / 1000);

const p2 = performance.now();
fib2(1000);
console.log((performance.now() - p2) / 1000);