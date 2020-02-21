/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(obj) {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    if (Number.isFinite(obj[key])) {
      newObj[key] = String(obj[key]);
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key]) && obj[key] !== null && typeof obj[key] === "function" ) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  });

  return newObj;
}