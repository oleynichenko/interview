const _data = new WeakMap();
const _privateProp = Symbol();

class Stack {
  constructor() {
    _data.set(this, []);
    this[_privateProp] = "hello";
  }

  push(elem) {
    _data.get(this).push(elem);
  }

  pop() {
    if(_data.get(this).length) {
      _data.get(this)(elem);
      return elem;
    } else {
      throw new Error('Stack is empty')
    }

  }

  peek() {
    if(this.data.length) {
      const elem = this.data[this.data.lengh - 1];
      return elem;
    } else {
      throw new Error('Stack is empty')
    }
  }

  count() {
    console.log(this[_privateProp]);
    // return this.data.length;
  }
}

const stack = new Stack();
stack.count();