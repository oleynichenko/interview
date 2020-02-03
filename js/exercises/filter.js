/*
* Создайте собственную реализацию функции filter().
* filter([1, 2, 3, 4], n => n < 3)    // [1, 2]
 */

const { assert } = require(`./util`);

function filter(arr, cb) {
  const res = [];

  arr.forEach((item) => {
    if (cb(item)) {
      res.push(item);
    }
  });

  return res;
}

assert(filter([1, 2, 3, 4], n => n < 3).toString() === `1,2`);
assert(filter([4, 2, 3, 4], n => n < 4).toString() === `2,3`);
assert(filter([], n => n < 4).toString() === ``);
