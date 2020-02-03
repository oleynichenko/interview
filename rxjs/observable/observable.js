"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const source = new rxjs_1.Observable(subscriber => {
    subscriber.next(1);
    subscriber.next('one');
    subscriber.complete();
});
const subscriber = {
    next(x) { console.log(x); },
    error(x) { console.log(x); },
    complete() { console.log('completed'); }
};
source.subscribe((x) => { console.log(x); }, (x) => { console.log(x); }, () => { console.log('completed'); });
source.subscribe(subscriber);
