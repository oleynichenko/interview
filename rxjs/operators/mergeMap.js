"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
// emit 'Hello'
// const source1 = of('Hello', 'Bye');
const source1 = rxjs_1.of('Hello', 'Bye');
const source2 = rxjs_1.of('World', 'Sasha');
// map to inner observable and flatten
const example = source1
    .pipe(operators_1.mergeMap(val1 => source2.pipe(operators_1.map(val2 => `${val1} ${val2}!`))));
// output: 'Hello World!'
example
    .subscribe(val => console.log(val));
