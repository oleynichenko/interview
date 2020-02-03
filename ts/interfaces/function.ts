/*
 * Реализация интерфейса для функции
 */

interface Arithmetic {
  (a: number, b: number): number;
}

const sum: Arithmetic = function (x, y) {
  return x + y;
};

const dif: Arithmetic = function (x, y) {
  return x - y;
};

