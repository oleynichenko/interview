function f(arr) {
  const sortedArr = [...arr];
  let noSwaps;

  for (j = 0; j < sortedArr.length; j++) {
    noSwaps = true;

    for (let i = 0; i < (sortedArr.length - j - 1); i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]];
        noswaps = false;
      }
    }

    if (noSwaps) break;
  }

  return sortedArr;
}

describe("f", function() {
  it("[]", function() {
    expect(f([])).toEqual([]);
  });

  it("[3, 1, -1, 2]", function() {
    expect(f([3, 1, -1, 2])).toEqual([-1, 1, 2, 3]);
  });

  it("[0, 1, 2, -10, -2]", function() {
    expect(f([0, 1, 2, -10, -2])).toEqual([-10, -2, 0, 1, 2]);
  });

  it("[1]", function() {
    expect(f([1])).toEqual([1]);
  });
});
