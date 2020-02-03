/*
 * Найти отсутствующее чсило в последовательности
 */

const { assert } = require(`./util`);

function missing(arr) {
  const sorted = [...arr].sort();

  for (let i = 1; i < sorted.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) return arr[i] - 1;
  }
}

assert(missing([]) === undefined);
assert(missing([1, 4, 3]) === 2);
assert(missing([2, 3, 4]) === undefined);
assert(missing([5, 1, 4, 2]) === 3);
assert(missing([1, 2, 3, 4]) === undefined);