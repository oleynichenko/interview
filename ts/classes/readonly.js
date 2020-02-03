class User {
    constructor(userId, userName) {
        this.id = userId;
        this.name = userName;
    }
}
let tom = new User(2, "Tom");
console.log(tom.id, tom.name);
// tom.id=34;    // Ошибка - так как id - только для чтения
class User2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let david = new User2(2, "David");
console.log(david.id, david.name);
