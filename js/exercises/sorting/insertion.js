function f(array) {
  const arr = [...array];

  for(let i = 1; i < arr.length; i++) {
    for(let j = i; j >= 0; j--) {
      if (arr[j - 1] > arr[j]) {
        const currentValue = arr[j];

        arr[j] = arr[j - 1];
        arr[j - 1] = currentValue;
      } else {
        break;
      }
    }
  }

  return arr;
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
