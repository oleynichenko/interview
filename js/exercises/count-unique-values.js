// counts the unique values in the array. Negative numbers are possible and array is be sorted.

function countUnique1(arr) {
  return new Set(arr).size;
}

function countUnique2(arr) {
  let current;
  return arr.filter(item => {
    if (item !== current) {
      current = item;
      return true;
    } else {
      return false;
    }
  }).length;
}

function countUnique3(arr) {

}

describe("countUnique", function() {
  it("[]", function() {
    expect(countUnique([])).toEqual(0);
  });

  it("[-1, 1]", function() {
    expect(countUnique([-1, 1])).toEqual(2);
  });


  it("[-10, -2, 0, 1, 2]", function() {
    expect(countUnique([-10, -2, 0, 1, 2])).toEqual(5);
  });

  it("[-10, -2, -2, 0, 1, 1, 3]", function() {
    expect(countUnique([-10, -2, -2, 0, 1, 1, 3])).toEqual(5);
  });
});