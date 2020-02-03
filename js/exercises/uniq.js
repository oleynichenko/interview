/*
 * Реализуйте функцию uniq(), которая принимает массив чисел и возвращает уникальные числа, найденные в нём.
 * Может ли функция решить эту задачу за время O(N)?
 */

const { assert } = require(`./util`);

// function uniq(arr) {
//   return [...new Set(arr)];
// }

const uniq = function(arr) {
  return arr.reduce((result, current) => {
    if (result.indexOf(current) === -1) {
      result.push(current);
    }

    return result;
  }, [])
};
assert(JSON.stringify(uniq([1,1,1]), JSON.stringify([1])));
assert(JSON.stringify(uniq([2,1,1]), JSON.stringify([2,1])));