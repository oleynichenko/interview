"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
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
new rxjs_1.Observable(subscriber => {
    console.log('promise started');
    setTimeout(function () {
        console.log('timeout');
        subscriber.next(123);
    });
}).subscribe(x => console.log('next: ' + x));
