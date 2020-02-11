String.prototype.repeatify = String.prototype.repeatify || function (n) {
  // return this.valueOf.repeat(n);
  return this.repeat(n);
};

String.prototype.repeatify = String.prototype.repeatify || function (n) {
  let str = '';

  for(i = 0; i < n; i++) {
    str += this;
  }

  return str;
};

console.log('hello'.repeatify(2));