/*
 * Реализуйте функцию assignDeep(), которая похожа на Object.assign(), но выполняет глубокое объединение объектов.
 * Для того, чтобы не усложнять задачу, можно исходить из допущения,
 * что объекты могут содержать только числа и другие объекты (в них не может быть массивов, строк, и так далее).
 */

const { assert } = require(`./util`);

function assignDeep(obj1, obj2) {
  for(let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof key === 'object' && key !== null) {
        assignDeep(obj1[key], obj2[key]);
      } else {
        obj1[key] = obj2[key];
      }
    }
  }

  return obj1;
}

assert(JSON.stringify(assignDeep({ a: 1 }, {}), JSON.stringify({ a: 1 })));
assert(JSON.stringify(assignDeep({ a: 1 }, { a: { b: [1] } }), JSON.stringify({ a: { b: [1] } })));
assert(JSON.stringify(assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }), JSON.stringify({ a: { b: { c: 1, d: 2 }}, e: 3 })));