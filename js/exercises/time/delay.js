/*
 * Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
 */
// this будет работать когда const obj.newFoo = delay(obj.foo, 2000);
function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  }
}

const foo = (text) => console.log(text);

const newFoo = delay(foo, 2000);

newFoo("hello");