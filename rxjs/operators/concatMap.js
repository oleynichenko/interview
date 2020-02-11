const { from, interval } = require('rxjs');
const { concatMap, take, map } = require('rxjs/operators');

from([1, 2, 3]).pipe(
  concatMap(ev => interval(500).pipe(
    take(4),
    map(i => ev)))
).subscribe(x => console.log(x));


