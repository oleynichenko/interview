import { of } from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

// emit 'Hello'
// const source1 = of('Hello', 'Bye');
const source1 = of('Hello', 'Bye');
const source2 = of('World', 'Sasha');

// map to inner observable and flatten
const example = source1
  .pipe(
    mergeMap(val1 => source2.pipe(
      map(val2 => `${val1} ${val2}!`))
    )
  );

// output: 'Hello World!'
example
  .subscribe(val => console.log(val));