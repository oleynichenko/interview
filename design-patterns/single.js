/*
 * A design pattern that restricts the instantiation of a class to one object.
 * Usually, the goal is to manage global application state.
 *
 * Одиночка (англ. Singleton) — порождающий шаблон проектирования,
 * гарантирующий что в однопоточном приложении
 * будет единственный экземпляр класса с глобальной точкой доступа.
 *
 * - Объект сбора ошибок
 * - Класс доступа к браузерным хранилищам и cookies
 */


const counterModule = (function () {
  let instance,
    counter = 0;

  const getCounter = function () {
    return counter;
  };

  const increaseCounter = function () {
    counter ++;
  };

  const createInstance = function () {
    return {
      getCounter: getCounter,
      increaseCounter: increaseCounter
    }
  };

  return {
    getInstance: function () {
      return instance || (instance = createInstance());
    }
  }
})();


// ES 6 синтаксис
let single;

class Single {
  constructor(name) {
    if (!single) {
      this.name = name;
      single = this;
    }

    return single;
  }

  say() {
    console.log('Hello! I am ' + this.name);
  }
}

const firstSingle = new Single('Alex');
const secondSingle = new Single('Darya');

console.log(`ES6 style`, firstSingle === secondSingle);


// В функциональном стиле
function Singleton() {
  if (Singleton.instance) return Singleton.instance;
  this.foo = 123;
  Singleton.instance = this;
}

const one = new Singleton();
const two = new Singleton();
console.log(`Functional style`, one === two);