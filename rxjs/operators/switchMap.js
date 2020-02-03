"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
//emit immediately, then every 3s
const source = rxjs_1.timer(0, 3000);
//switch to new inner observable when source emits, emit items that are emitted
const example = source.pipe(operators_1.switchMap(() => rxjs_1.interval(500)));
//output: 0,1,2,3,4,5...0,1,2,3,4,5
const subscribe = example.subscribe(val => console.log(val));
