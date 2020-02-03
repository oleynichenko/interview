/*
 * Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того, является ли переданная ей строка палиндромом (функция нечувствительна к регистру и к наличию в строке пробелов).
 *
 */

const { assert } = require(`./util`);

function isPalindrome(str) {
  const formattedStr = str.split(' ').join('').toLowerCase();
  const reversed =  formattedStr.split('').reverse().join('') ;
  return formattedStr === reversed;

}

assert(isPalindrome('') === true);
assert(isPalindrome('abcdcba') === true);
assert(isPalindrome('abcd') === false);
assert(isPalindrome('A man a plan a canal Panama') === true);
