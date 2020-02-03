/*
 * Реализуйте функцию permute(), которая возвращает массив строк, содержащий все пермутации заданной строки.
 */
// https://github.com/Shitovdm/interviewing-tasks/blob/master/third-level.js

function* permute(a, n = a.length) {
  if (n <= 1) {
    yield a.slice();
  } else {
    for (let i = 0; i < n; i++) {
      yield * permute(a, n - 1);

      const j = n % 2 ? 0 : i;

      [a[n - 1], a[j]] = [a[j], a[n - 1]];
    }
  }
}

const res = Array.from(permute("abc".split(''))).map(perm => perm.join(''));

console.log(res);

// permute('');             // []
// permute('abc');          // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']