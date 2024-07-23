const loop = function (value, testf, bodyf, updatef) {
  // console.log(value);
  // console.log(testf(value));
  // console.log(updatef(value));
  while (testf(value)) {
    bodyf(value);
    value = updatef(value);
  }
};

const lessThan = function (a) {
  return (b) => b < a;
};

const body = function (a) {
  console.log(a);
};

const increment = function (a) {
  return (a += 1);
};

loop(4, lessThan(9), body, increment);

loop(4, lessThan(9), console.log, increment);
