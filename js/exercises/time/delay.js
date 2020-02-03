/*
 * Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
 */

function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  }
}

const foo = (text) => console.log(text);

const newFoo = delay(foo, 2000);

newFoo("hello");