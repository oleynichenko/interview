class User {
  readonly id: number;
  name: string;

  constructor(userId: number, userName: string) {
    this.id = userId;
    this.name = userName;
  }
}

let tom: User = new User(2, "Tom");
console.log(tom.id, tom.name);
// tom.id=34;    // Ошибка - так как id - только для чтения

class User2 {
  constructor(readonly id: number, public name: string) { }
}

let david: User2 = new User2(2, "David");
console.log(david.id, david.name);