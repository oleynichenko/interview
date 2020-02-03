/*
 * Реализуйте функцию intersection(), которая принимает два массива и возвращает их пересечение.
 * Можете ли вы добиться того, чтобы функция решала эту задачу за время O(M+N), где M и N — длины массивов?
 */

const { assert, compareArrays } = require(`./util`);

function intersection(arr1, arr2) {
  const newArr2 = [...arr2];

  return arr1.filter((item) => {
    const index = newArr2.indexOf(item);

    if (index !== -1) {
      newArr2.splice(index, 1);
      return true;
    } else return false;
  });
}

assert(compareArrays(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]), [1, 4]) === true);
assert(compareArrays(intersection([1, 5, 4, 2], [7, 12]), []) === true);
assert(compareArrays(intersection([1, 2, 4, 1], [2, 1]), [1, 2]) === true);