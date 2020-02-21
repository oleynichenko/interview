// Write a recursive function  which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
  let res = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(flatten(item));
    } else {
      res.push(item);
    }
  }

  return res;
}

describe("flatten", function() {
  it("[1, 2, 3, [4, 5] ]", function() {
    expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  it("[1, [2, [3, 4], [[5]]]]", function() {
    expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5]);
  });

  it("[[1],[2],[3]]", function() {
    expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1,2,3]);
  });
});
