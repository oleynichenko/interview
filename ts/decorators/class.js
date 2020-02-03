var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function sealed(constructor) {
    console.log("sealed decorator");
    Object.seal(constructor);
    // можно вызывать конструктор и получать доступ к данным класса
    const p = constructor("hello");
    Object.seal(constructor.prototype);
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(this.name);
    }
};
Person = __decorate([
    sealed
], Person);
function foo(data) {
    return function (constructor) {
        console.log(data);
    };
}
let Person2 = class Person2 {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(this.name);
    }
};
Person2 = __decorate([
    foo("hello")
], Person2);
// const person = new Person('John');
// person.name = 'David';
// person.print();
