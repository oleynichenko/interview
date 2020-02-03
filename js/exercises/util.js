function assert(value, description = `not passed`) {
  const message = value ? `passed` : description;

  console.log(message);
}

const compareArrays = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

module.exports = {
  assert,
  compareArrays
};