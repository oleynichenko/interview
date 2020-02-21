function subSearch(str, sub) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (str[i + j] !== sub[j]) {
        break;
      }

      if (j === sub.length - 1) {
        counter++;
      }
    }

  }

  return counter;
}

describe("subSearch", function() {
  it("\"ha ha\", \"ha\"", function() {
    expect(subSearch("ha hha", "ha")).toEqual(2);
  });
});
