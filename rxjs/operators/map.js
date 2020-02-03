"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const source = rxjs_1.range(1, 5).pipe(operators_1.map(val => val * 2));
source.subscribe((val => console.log(val)));
