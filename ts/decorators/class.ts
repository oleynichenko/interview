function sealed(constructor: Function) {
  console.log("sealed decorator");
  Object.seal(constructor);
  // можно вызывать конструктор и получать доступ к данным класса
  const p = constructor("hello");
  Object.seal(constructor.prototype);
}

@sealed
class Person {
  constructor(public name: string) { }

  print(): void {
    console.log(this.name);
  }
}

function foo(data) {
  return function (constructor) {
    console.log(data);
  }
}

@foo("hello")
class Person2 {
  constructor(public name: string) { }

  print(): void {
    console.log(this.name);
  }
}
// const person = new Person('John');
// person.name = 'David';
// person.print();
