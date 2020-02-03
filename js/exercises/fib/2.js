function fib(n) {
  const sq5 = Math.sqrt(5);

  var a = (1 + sq5) / 2;
  var b = (1 - sq5) / 2;

  return Math.round((Math.pow(a, n) - Math.pow(b, n)) / sq5);
}

function showFibRow(n) {
  for(let i = 0; i < n; i++) {
    console.log(fib(i));
  }
}

showFibRow(100);