"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get elements
const rxjs_1 = require("rxjs");
var weightSliderElem = document.querySelector('#weight-slider');
var weightTextElem = document.querySelector('#weight-text');
// TODO: create an Observable `weight` which emits the
// (current and ongoing) value of weightSliderElem.
const weight = rxjs_1.fromEvent(weightSliderElem, 'input');
// TODO: subscribe to `weight` and set the innerHTML
// of weightTextElem.
weight.subscribe((event) => {
    weightTextElem.innerHTML;
});
