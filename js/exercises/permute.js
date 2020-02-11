/*
 * Реализуйте функцию permute(), которая возвращает массив строк, содержащий все пермутации заданной строки.
 */
// https://github.com/Shitovdm/interviewing-tasks/blob/master/third-level.js

// https://medium.com/@lindagmorales94/how-to-solve-a-string-permutation-problem-using-javascript-95ad5c388219

// function* permute(a, n = a.length) {
//   if (n <= 1) {
//     yield a.slice();
//   } else {
//     for (let i = 0; i < n; i++) {
//       yield * permute(a, n - 1);
//
//       const j = n % 2 ? 0 : i;
//
//       [a[n - 1], a[j]] = [a[j], a[n - 1]];
//     }
//   }
// }
//
// const res = Array.from(permute("abc".split(''))).map(perm => perm.join(''));
//
// console.log(res);

function permute(str) {
  const ret = [];

  // permutation for one or two characters string is easy:
  // 'a'  -> ['a']
  // 'ab' -> ['ab', 'ba']
  if (str.length === 1) return [str];
  if (str.length === 2) return [str, str[1] + str[0]];

  // otherwise combine each character with a permutation
  // of a subset of the string. e.g. 'abc':
  //
  // 'a' + permutation of 'bc'
  // 'b' + permutation of 'ac'
  // 'c' + permutation of 'ab'
  str
    .split('')
    .forEach(function (chr, idx, arr) {
      const sub = [...arr]; // "clone" arr

      sub.splice(idx, 1);

      permute(sub.join('')).forEach(function (perm) {
        ret.push(chr + perm);
      });
    });

  return ret;
}

console.log(permute(''));             // []
console.log(permute('abc'));          // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']