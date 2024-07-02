const range = function (start, end, step = 1) {
  const arr = [];
  if (start > end) {
    for (start; start >= end; start += step) {
      arr.push(start);
    }
  } else {
    for (start; start <= end; start += step) {
      arr.push(start);
    }
  }
  return arr;
};

console.log(range(1, 10, 2));

const sum = function (numArray) {
  const newNum = numArray.reduce((total, cur) => total + cur);
  return newNum;
};
console.log(sum([2, 8, 10]));
