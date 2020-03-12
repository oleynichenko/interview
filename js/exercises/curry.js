// Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c).

function sum(a, b) {
  return a + b;
}

function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    }
  };
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2));

function curry1(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}