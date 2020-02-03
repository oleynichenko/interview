/*
 * Реализуйте функцию reduceAsync(), которая похожа на функцию reduce() из группы простых заданий,
 * но работает с функциями, возвращающими promise-объекты, каждый из которых должен быть разрешён до перехода к следующему.
 */

async function reduceAsync(array, cb, value) {
  for (let item of array) {
    value = cb(value, await item());
  }

  return value;
}

let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));

reduceAsync([a, b, c], (acc, value) => [...acc, value], [])
  .then(res => console.log(res)); // ['a', 'b', 'c']

reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d'])
  .then(res => console.log(res)); // ['d', 'a', 'c', 'b']