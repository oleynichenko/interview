"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
rxjs_1.of('text', 20, 30)
    .subscribe(next => console.log('next:', next), err => console.log('error:', err), () => console.log('the end'));
