const loop = function (value, test, body, update) {
  while (test(value)) {
    body(value);
    value = update(value);
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
