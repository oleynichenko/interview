function Spy(obj, method) {
  let spy = {
    args: []
  };

  let original = obj[method];
  obj[method] = function() {
    let args = [].slice.apply(arguments);
    spy.count++;
    spy.args.push(args);
    return original.call(obj, args);
  };

  return Object.freeze(spy);
}

let sample = {
  fn: function(args){
    console.log(args);
  }
};

let spy = Spy(sample, 'fn');
sample.fn(1,2,3);
console.log(spy.args.length); //1
console.log(spy.args); //[[1,2,3]]

sample.fn('The second call');
console.log(spy.args.length); //2
console.log(spy.args); //[[1,2,3], 'The second call']

//try modifying the spy
spy.args = [];
console.log(spy.args); //[[1,2,3], 'The second call']