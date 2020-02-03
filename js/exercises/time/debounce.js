/*
 *  Создайте самостоятельную реализацию функции debounce() которая игнорирует повторные вызовы в течении определенного промежутка времени.
 *
 *      let a = () => console.log('foo');
 *      let b = debounce(a, 100);
 *      b(); выполняется сразу
 *      b();
 *      b();
 */

function debounce(f, time) {
  let isBusy = false;

  return function () {
    if (isBusy) return;

    isBusy = true;
    f.apply(this, arguments);

    setTimeout(() => isBusy = false, time);
  }
}

// let a = (text) => (text);
let b = debounce(console.log, 1000);

b("text1");
b("text2");
setTimeout(() => b("text3"), 3000);