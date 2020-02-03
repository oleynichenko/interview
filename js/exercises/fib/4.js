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

const fib = fibonacciMemo();

console.log(fib(10000));