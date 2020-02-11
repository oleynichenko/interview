// accepts a sorted array of integers. Return first pair where the sum is 0 [first, second] or undefined

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while(right > left) {
    const dif = arr[right] + arr[left];

    if (dif > 0) {
      right--;
    } else if(dif < 0) {
      left++;
    } else {
      return [arr[left], arr[right]];
    }
  }

  return undefined;
}

describe("sumZero", function() {
  it("[]", function() {
    expect(sumZero([])).toEqual(undefined);
  });

  it("[-1, 1]", function() {
    expect(sumZero([-1, 1])).toEqual([-1, 1]);
  });


  it("[-10, -2, 0, 1, 2]", function() {
    expect(sumZero([-10, -2, 0, 1, 2])).toEqual([-2, 2]);
  });

  it("[-10, -2, 0, 1, 3]", function() {
    expect(sumZero([-10, -2, 0, 1, 3])).toEqual(undefined);
  });
});