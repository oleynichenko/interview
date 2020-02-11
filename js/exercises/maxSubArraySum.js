// calculate the maximum sum of n consecutive elems in array

function maxSubArraySum(arr, n) {
  let maxSum;

  if (n > arr.length) return undefined;

  maxSum = 0;

  for (i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  for (i = n; i < arr.length; i++) {
    const newSum = maxSum + arr[i] - arr[i - n];

    if (newSum > maxSum) {
      maxSum = newSum;
    }
  }

  return maxSum;
}

describe("maxSubArraySum", function() {
  it("[]", function() {
    expect(maxSubArraySum([], 3)).toEqual(undefined);
  });

  it("[-1, 1]", function() {
    expect(maxSubArraySum([-1, 1], 1)).toEqual(1);
  });

  it("[-10, -2, 0, 1, 2]", function() {
    expect(maxSubArraySum([-10, -2, 0, 1, 2], 3)).toEqual(3);
  });

  it("[10, -10, -2, 0, 1, 3]", function() {
    expect(maxSubArraySum([10, -10, -2, 0, 1, 3], 6)).toEqual(2);
  });
});