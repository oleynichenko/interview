// Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.

function plus(num) {
  return this + num;
}

function minus(num) {
  return this - num;
}

Number.prototype.plus = Number.prototype.plus || function (num) {
  return this + num;
};

Number.prototype.minus = Number.prototype.minus || function (num) {
  return this - num;
};

console.log((2).plus(3).minus(1));