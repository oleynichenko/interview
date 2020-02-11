const { of, interval } = require('rxjs');
const { switchAll, take, delay, map }  = require('rxjs/operators');

interval(250).pipe(
  take(4),
  map(vl => of(vl).pipe(delay(300))),
  switchAll()
).subscribe(vl => console.log(vl));