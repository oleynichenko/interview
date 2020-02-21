// Есть несколько слов, определить состоят ли они из одних и тех же букв
// ('кот', 'ток', 'окт')
function sameWords(arr) {
  const firstWordLenght = arr[0].length;
  const leftWords = arr.slice(1);

  if(leftWords.filter((w => w.length !== firstWordLenght)).length > 0) return false;

  function getWordsLetters(word) {
    const obj = {};

    for(let char of word) {
      if (obj[char] !== undefined) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }

    return obj;
  }

  function sameWords(obj1, obj2) {
    for (let char in obj1) {
      if (obj1.hasOwnProperty(char) && (!obj2[char] || obj2[char] !== obj1[char])) {
        return false;
      }
    }

    return true;
  }

  const firstWord = getWordsLetters(arr[0]);

  for (let word of leftWords) {
    if (!sameWords(firstWord,  getWordsLetters(word))) return false;
  }

  return true;
}