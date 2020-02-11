// function which takes a string and returns counts of each number

function charCount(str) {
  const counter = {};

  const arr = str.split(" ").join("").split("");

  arr.forEach((char) => {
    counter[char] = counter[char] ? ++counter[char] : 1;
  });

  return counter;
}

console.log(JSON.stringify(charCount('str str')));

