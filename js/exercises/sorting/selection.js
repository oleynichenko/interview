function f(arr) {
  let array = [...arr];

  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (i !== min) {
      const temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }

  return array;
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