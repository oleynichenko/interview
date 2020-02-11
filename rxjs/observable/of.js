import {of} from "rxjs";

of('text', 20, 30)
  .subscribe(
    next => console.log('next:', next),
    err => console.log('error:', err),
    () => console.log('the end'),
  );