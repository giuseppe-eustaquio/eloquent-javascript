const countBs = function (str) {
  let bs = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === "B") {
      bs += 1;
    }
  }
  return bs;
};
console.log(countBs("aBcBBBdeBghiBj"));

const countChar = function (str, letter) {
  let bs = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === letter) {
      bs += 1;
    }
  }
  return bs;
};
console.log(countChar("aBcBBBdeBghiBdddj", "d"));

// currying style
const countCharCurry = function (str) {
  let bs = 0;
  return function (letter) {
    for (let i = 0; i <= str.length; i++) {
      if (str[i] === letter) {
        bs += 1;
      }
    }

    return bs;
  };
};
console.log(countCharCurry("aBcBBBdeBghaaaaaiBdddj")("a"));
