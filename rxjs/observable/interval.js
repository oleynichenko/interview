const { interval, Observable } = require("rxjs");

// interval(1000).subscribe((num) => console.log(num));

// custom implementation
const int = new Observable((observer) => {
  let counter = 0;

  setInterval(() => {
    observer.next(++counter);
  }, 1000);
});

int.subscribe((data) => console.log(data));