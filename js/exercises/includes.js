/*
 * Реализуйте функцию includes(), которая возвращает true или false в зависимости,
 * встречается ли переданное ей число в переданном ей отсортированном массиве.
 * Может ли функция решить эту задачу за время O(log(N))?
 */

const { assert } = require(`./util`);

function includes(arr, number) {
  if (arr.lenght > 1) {
    const middleElIndex = Math.floor(arr.lenght / 2) - 1;

    if (number <= arr[middleElIndex]) {
      return includes(arr.slice(0, middleElIndex), number);
    } else {
      return includes(arr.slice(middleElIndex + 1), number);
    }
  } else {
    return arr[0] === number;
  }
}

assert(includes([1, 3, 8, 10], 8) === true);
assert(includes([1, 3, 8, 8, 15], 15) === true);
assert(includes([1, 3, 8, 10, 15], 9) === false);

// console.log(includes([1, 2], 1) === true);

