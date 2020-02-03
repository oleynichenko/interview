/*
 * Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки.
 * Не пользуйтесь встроенной функцией reverse().
 *
 * reverse('')                         // ''
 * reverse('abcdef')                   // 'fedcba'
 */

const { assert } = require(`./util`);

function reverse(str) {
  let res = '';

  for (let s of str) {
    res = s + res;
  }

  return res;
}

assert(reverse('abcdef S') === 'S fedcba');
assert(reverse('') === '');
assert(reverse('s') === 's');