/*
 * Decorator pattern
 * It allows dynamically adding or modify properties and methods
 * С помощью декоратора, мы можем динамически добавлять обьектам новые свойства и методы.
 * То есть мы как бы заворачиваем наш обьект в декоратор, как в superclass.
 */

function User(name) {
  this.name = name;

  this.say = function() {
    console.log("User: " + this.name);
  };
}

// Декоратор класс
function DecoratedUser(user, street, city) {
  this.user = user;
  this.name = user.name;  // ensures interface stays the same
  this.street = street;
  this.city = city;

  this.say = function() {
    console.log("Decorated User: " + this.name + ", " +
      this.street + ", " + this.city);
  };
}

// Декоратор функция
function cry(user) {
  user.cry = function() {
    console.log(user.name + ' is crying!!!');
  }
}

var user = new User("Kelly");
user.say();

var decoratedUser = new DecoratedUser(user, "Broadway", "New York");
decoratedUser.say();

cry(decoratedUser);
decoratedUser.cry();
