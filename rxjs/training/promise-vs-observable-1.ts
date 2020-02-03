import {Observable} from "rxjs";

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log('timeout');
//     resolve(123);
//   }, 1000);
//   console.log('promise started');
// });

// promise.then(x => console.log('resolved: ' + x));

// TODO: Create an RxJS Observable `observable` with
// the same behavior as the promise above.

new Observable(subscriber => {
  console.log('promise started');

  setTimeout(function () {
    console.log('timeout');
    subscriber.next(123);
  });
}).subscribe(x => console.log('next: ' + x));
