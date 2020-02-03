/*
 * Реализуйте функцию seq(), пользуясь тем же подходом, что и при работе над функцией reduceAsync().
 * Эта функция должна принимать массив функций, которые возвращают promise-объекты, и разрешать их один за другим.
 */

async function seq(arr) {
  const pArray = arr.map(async (item) => {
    return await item();
  });

  return Promise.all(pArray);
}

let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => Promise.resolve('c');

seq([a, b, c])
  .then(res => console.log(res));               // ['a', 'b', 'c']
seq([a, c, b])
  .then(res => console.log(res));                  // ['a', 'c', 'b']