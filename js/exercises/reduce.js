/*
 * Создайте собственную реализацию функции reduce().
 * reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10
 */

const { assert } = require(`./util`);

function reduce(arr, cb, value) {
  if (value === undefined && arr.length === 0) {
    throw new Error("can not reduce empty array");
  }

  let res;
  let indexToStart;

  if (value === undefined) {
    res = arr[0];
    indexToStart = 1;
  } else {
    res = value;
    indexToStart = 0;
  }

  for(let i = indexToStart; i < arr.length; i++) {
    res = cb(res, arr[i]);
  }

  return res;
}

assert(reduce([1, 2], (a, b) => a + b, 0) === 3);
assert(reduce([1, 2, 3], (a, b) => a * b, 1) === 6);
assert(reduce([], (a, b) => a * b, 1) === 1);
