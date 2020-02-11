const { timer, interval } = require('rxjs');
const { switchMap }  = require('rxjs/operators');

//emit immediately, then every 3s
const source = timer(0, 3000);

//switch to new inner observable when source emits, emit items that are emitted
const example = source.pipe(switchMap(() => interval(500)));

//output: 0,1,2,3,4,5...0,1,2,3,4,5
const subscribe = example.subscribe(val => console.log(val));
