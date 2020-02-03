"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];
// TODO: Create a var `result` that contains the sum
// of all numbers in source. Use a traditional for loop
// for this exercise.
function sumArray(arr) {
    let sum = 0;
    for (let item of source) {
        const number = parseInt(item, 10);
        if (!isNaN(number)) {
            sum += number;
        }
    }
    return sum;
}
function sumArray2(arr) {
    return arr
        .map(item => parseInt(item, 10))
        .filter(item => !isNaN(item))
        .reduce((sum, item) => sum + item);
}
// console.log(sumArray2(source));
// TODO: Create an Observable `result` that emits the
// sum of all numbers in source. Use pure functions
// such as map, filter, reduce, scan, merge, delay,
// concat, take, etc.
const result = rxjs_1.from(source).pipe(operators_1.map((item) => parseInt(item, 10)), operators_1.filter(item => !isNaN(item)), operators_1.reduce((sum, item) => sum + item));
result.subscribe(x => console.log(x));
