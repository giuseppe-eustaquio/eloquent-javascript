const countB = (str) => {
  let b = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === "B") {
      b++;
    }
  }
  return b;
};
console.log(countB("aBcBBBdeBghiBj"));

const countChar = function (str, letter) {
  let b = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === letter) {
      b++;
    }
  }
  return b;
};
console.log(countChar("aBcBBBdeBghiBdddj", "d"));

// currying style
const countCharCurry = (str) => {
  let b = 0;
  return function (letter) {
    for (let i = 0; i <= str.length; i++) {
      if (str[i] === letter) {
        b += 1;
      }
    }

    return b;
  };
};
console.log(countCharCurry("aBcBBBdeBghaaaaaiBdddj")("a"));
