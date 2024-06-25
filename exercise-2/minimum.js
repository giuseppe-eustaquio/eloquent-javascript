const min = function (a, b) {
  if (typeof a != "number" || typeof b != "number") return NaN;
  return a <= b ? a : b;
};
console.log(min(1211, 1220));
