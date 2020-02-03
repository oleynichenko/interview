class PersonalData {
    constructor(name, age, position, birthdate) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}
class Policeman extends PersonalData {
    constructor(name, age) {
        super(name, age, 'policemen');
    }
}
const john = new Policeman('John', 29);
console.log(JSON.stringify(john, null, '\t'));
