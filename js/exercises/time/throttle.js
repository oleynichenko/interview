/*
 * Создать функцию реагирующую на движения мыши раз в например 100мс
 * первый вызов сразу
 */

// после отложенного вызова опять должен начаться таймаут

function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  return function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  };
}

let b = throttle(console.log, 1000);

b("text1");
b("text2");
b("text3");
setTimeout(() => b("text4"), 4000);