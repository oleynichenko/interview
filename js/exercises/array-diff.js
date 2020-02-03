/*
 * Есть два массива со строковыми данными.
 * Нужно сравнить их между собой и вывести в третий массив данные массива А,
  * отсутствующие в массиве B.
 */

const { assert, compareArrays } = require(`util`);

function getArrayDiff(arr1, arr2) {
  return arr1.filter((item) => arr2.indexOf(item) === -1);
}

assert(compareArrays(getArrayDiff([1, 2], [2, 3]), [1]) === true);
assert(compareArrays(getArrayDiff([1, 2], [2, 1]), []) === true);
assert(compareArrays(getArrayDiff([1, 2, 0], [4, 5]), [1, 2, 0]) === true);
assert(compareArrays(getArrayDiff([1, 2, 2], [2, 5]), [1]) === true);