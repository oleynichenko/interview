const { range } = require("rxjs");
const { map } = require("rxjs/operators");

const source = range(1, 5).pipe(
  map(val => val * 2)
);

source.subscribe((val => console.log(val)));
