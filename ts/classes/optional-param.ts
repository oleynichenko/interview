class PersonalData {
  constructor(public name: string,
              public age: number,
              public position: string,
              birthdate?: string) { }
}

class Policeman extends PersonalData {
  constructor(name: string, age: number) {
    super(name, age, 'policemen')
  }
}

const john = new Policeman('John', 29);

console.log(JSON.stringify(john, null, '\t'));
