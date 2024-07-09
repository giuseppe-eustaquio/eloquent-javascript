// const range = function (start, end, step = 1) {
//   const arr = [];
//   if (start > end) {
//     for (start; start >= end; start += step) {
//       arr.push(start);
//     }
//   } else {
//     for (start; start <= end; start += step) {
//       arr.push(start);
//     }
//   }
//   return arr;
// };

const range = function (start, end, step = 1) {
  const arr = [];
  if (step === 0) return arr; // Avoid infinite loop if step is zero

  if (start > end) {
    if (step > 0) step = -step; // Ensure step is negative for decreasing range
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(range(15, 10, 2));

// const sum = function (numArray) {
//   const newNum = numArray.reduce((total, cur) => total + cur);
//   return newNum;
// };

const sum = function (numArray) {
  const newNum = numArray.reduce((total, cur) => total + cur, 0); // Added initial value 0
  return newNum;
};

console.log(sum([2, 8, 10]));
