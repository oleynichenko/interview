// given a sorted array of unique integer. Return an index of passed value in array

function search(arr, value) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((max + min) / 2);

    if(arr[middle] > value) {
      max = middle - 1;
    } else if (arr[middle] < value) {
      min = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}

describe("search", function() {
  it("[1, 2, 4], 4", function() {
    expect(search([1, 2, 4], 4)).toEqual(2);
  });
});
