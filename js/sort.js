/*
 * Создайте реализацию функции sort(), которая сортирует числовой массив за время O(N×log(N)).
 */

const { assert, compareArrays } = require(`./util`);

function sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return mergeSorted(sort(left), sort(right));
}

function mergeSorted(left, right) {
  const result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}


assert(compareArrays(sort([]), []) === true);
assert(compareArrays(sort([-4, 1, Infinity, 3, 3, 0]), [-4, 0, 1, 3, 3, Infinity]) === true);
assert(compareArrays(sort([4, -1, Infinity, 3, 3, 0]), [-1, 0, 3, 3, 4, Infinity]) === true);

// console.log(mergeSorted([1,3, 5], [0,2, 4]));