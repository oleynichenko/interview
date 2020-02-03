/*
 * Реализуйте функцию isSorted(), которая возвращает true или false в
 * зависимости о того, отсортирован ли переданный ей числовой массив.
 */

const { assert } = require(`./util`);

function isSortedMy(arr) {
  if (arr.length <= 2) {
    return true;
  } else {
    if (arr[0] < arr[1]) {
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          return false;
        }
      }
    } else {
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
          return false;
        }
      }
    }
  }

  return true;
}

assert(isSortedMy([2, 1]) === true);
assert(isSortedMy([2, -3, -1]) === false);
assert(isSortedMy([1, 2]) === true);
assert(isSortedMy([1, 1]) === true);
assert(isSortedMy([-Infinity, 2, Infinity]) === true);
assert(isSortedMy([Infinity, -Infinity]) === true);
assert(isSortedMy([Infinity, Infinity]) === true);
assert(isSortedMy([2, 3, 1]) === false);
assert(isSortedMy([0, 1, 3, 3]) === true);
