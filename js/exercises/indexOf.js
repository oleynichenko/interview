/*
 * Создайте собственную реализацию функции indexOf() для массивов.
 * indexOf([1, 2, 3], 1)               // 0
 * indexOf([1, 2, 3], 4)               // -1
 */

const { assert } = require(`./util`);

function indexOf(arr, value, fromIndex = 0) {
  for(let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
}

assert(indexOf([1, 2, 3], 1) === 0);
assert(indexOf([1, 2, 3], 3) === 2);
assert(indexOf([1, 2, 3], 4) === -1);