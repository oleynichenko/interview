function same(arr1, arr2 ) {

  if (arr1.length !== arr2.length) return false;
  const arr1Values = {
  };

  const arr2Values = {
  };

  arr1.forEach((item) => {
    arr1Values[item] = ++arr1Values[item] || 1;
  });

  arr2.forEach((item) => {
    arr2Values[item] = ++arr2Values[item] || 1;
  });

  for (let prop in arr1Values) {
    const prop2 = Math.pow(+prop, 2);

    if (!arr2Values[prop2] || arr1Values[prop] !== arr2Values[prop2]) {
      return false;
    }
  }

  return true;
}

describe('same', function() {
  it('[1, 2, 3], [1, 4, 9]', function() {
    expect(same([1, 2, 3], [1, 4, 9])).toEqual(true);
  });

  it('[1, 2, 3], [1, 4, 9, 5]', function() {
    expect(same([1, 2, 3], [1, 4, 9, 5])).toEqual(false);
  });

  it('[1, 2, 2, 3], [1, 4, 3, 2]', () => {
    expect(same([1, 2, 2, 3], [1, 4, 3, 2])).toEqual(false);
  });
});
