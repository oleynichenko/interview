/*
 * Реализуйте функцию isPrime(), которая возвращает true или false,
 * указывая, является ли переданное ей число простым.
 *
 * Простые числа — это целые числа больше единицы,
 * которые не могут быть представлены как произведение двух меньших чисел
 */

const { assert } = require(`./util`);

const isPrime = (n) => {
  if (n === 1) {
    return false
  }

  if (n === 2) {
    return true;
  }

  for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
       return false;
    }
  }

  return true;
};

// assert(isPrime(`text`) === false);
// assert(isPrime(undefined) === false);
// assert(isPrime(0) === false);
assert(isPrime(1) === false);
assert(isPrime(2) === true);
assert(isPrime(5) === true);
assert(isPrime(4) === false);
assert(isPrime(9) === false);
assert(isPrime(15) === false);