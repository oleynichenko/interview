let i = 0;

let start = Date.now();

function count() {
  // делаем часть тяжёлой работы (*)
  do {
    i++;
  } while (i % 1e6 !== 0);

  if (i === 1e9) {
    console.log("Done in " + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count); // планируем новый вызов (**)
  }
}

count();