function readonly (
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  descriptor.writable = false;
}

class Woman {
  constructor(public name: string) { }

  @readonly
  print(): void {
    console.log(this.name);
  }
}

let jane = new Woman("Jane");

jane.print = function() {
  console.log("print has been changed");
};

jane.print();

class SomeService {
  someMethod(x: number) {

  }
}

const someService = new SomeService();
someService.someMethod(4);

someService['someMethod'](4);