/*
* Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ).
* Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
  */
const { assert } = require(`./util`);

class LinkedList {
  constructor(...arg) {
    this.set = new Set(arg);
  }

  add(num) {
    this.set.add(num);
  }

  has(num) {
    return this.set.has(num);
  }
}

let list = new LinkedList(1, 2, 3);

list.add(4); // undefined
list.add(5); // undefined

assert(list.has(1) === true);
assert(list.has(4) === true);
assert(list.has(6) === false);
