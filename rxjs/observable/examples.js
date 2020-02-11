const { fromEvent, of, from, fromPromise, bindCallback, bindNodeCallback } = require("rxjs");
const fs = require("fs");

// Из одного или нескольких значений
of('foo', 'bar');

// Из массива
from([1,2,3]);

// Из события
fromEvent(document.querySelector('button'), 'click');

// Из обещания
fromPromise(fetch('/users'));

// Из колбека (колбек должен быть последним аргументом)
// fs.exists = (path, cb(exists))
const exists = bindCallback(fs.exists);
exists('file.txt')
  .subscribe(exists => console.log('Does file exist?', exists));

// Из колбека (колбек должен быть последним аргументом)
// fs.rename = (pathA, pathB, cb(err, result))
const rename = bindNodeCallback(fs.rename);
rename('file.txt', 'else.txt')
  .subscribe(() => console.log('Renamed!'));