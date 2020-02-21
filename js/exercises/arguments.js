// function f(...args) {
//   const sign = args[0];
//   const rest = args.slice(1);
//
//   return rest.join(sign);
// }

function f() {
  return [].slice.call(arguments, 1).join(arguments[0]);
}

console.log(f('*', '1', 'b', '1c'));