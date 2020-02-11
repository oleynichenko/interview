const { fromEvent } = require("rxjs");

let count = 0;
const button1 = document.querySelector('button');
button1.addEventListener(
  'click',
  () => console.log(`Clicked! ${++count}`)
);

const button2 = document.querySelector('button');
fromEvent(button2, 'click')
  .pipe(
    scan(count => count + 1, 0)
  )
  .subscribe((count) => console.log(`Clicked! ${++count}`));