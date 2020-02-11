function anagramValid(str1, str2) {
  if (str1.length !== str2.length) return false;

  const letterCounter1 = {};
  const letterCounter2 = {};

  for(let char of str1) {
    if (char in letterCounter1) {
      letterCounter1[char]++;
    } else {
      letterCounter1[char] = 1;
    }
  }

  for(let char of str2) {
    if (char in letterCounter2) {
      letterCounter2[char]++;
    } else {
      letterCounter2[char] = 1;
    }
  }

  for(let char in letterCounter1) {
    if (!letterCounter2[char] || letterCounter2[char] !== letterCounter1[char]) {
      return false;
    } else {
      delete letterCounter2[char];
    }
  }

  return Object.keys(letterCounter2).length === 0;
}

describe('anagramValid', function() {
  it('"", ""', function() {
    expect(anagramValid("", "")).toEqual(true);
  });

  it('"cat", "tac"', () => {
    expect(anagramValid("cat", "tac")).toEqual(true);
  });

  it('"cat", "ttc"', () => {
    expect(anagramValid("'amanaplanacanalpanama'", "'acanalmanplanpamana'")).toEqual(false);
  });

  it('"texttwisttime", "timetwisttext"', () => {
    expect(anagramValid("texttwisttime", "timetwisttext")).toEqual(true);
  });
});