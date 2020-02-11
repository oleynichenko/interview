// Get elements
import {fromEvent} from "rxjs";
import {map, startWith} from "rxjs/operators";

var weightSliderElem = document.querySelector('#weight-slider');
var weightTextElem = document.querySelector('#weight-text');

// TODO: create an Observable `weight` which emits the
// (current and ongoing) value of weightSliderElem.

const weight = fromEvent(weightSliderElem, 'input').pipe(
  map((ev) => ev.target.value),
  startWith(weightSliderElem.value)
);

// TODO: subscribe to `weight` and set the innerHTML
// of weightTextElem.
weight.subscribe((x) => {
    weightTextElem.innerHTML = x;
});