/*
 * Реализуйте класс BinarySearchTree. Он должен поддерживать 4 метода: add(), has(), remove(), и size().
 */

class BinarySearchTree {
  constructor() {
    this.set = new Set();
  }

  add(...args) {
    args.forEach((item) => {
      this.set.add(item);
    });
  }

  has(item) {
    return this.set.has(item);
  }

  remove(num) {
    this.set.delete(num);
  }

  size() {
    return this.set.size;
  }
}


let tree = new BinarySearchTree();

tree.add(1, 2, 3, 4);
tree.add(5);
console.log(tree.has(2));                         // true
console.log(tree.has(5));                           // true
tree.remove(3);                        // undefined
console.log(tree.size());                           // 4