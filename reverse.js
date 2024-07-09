// const reverseArray = function (array) {
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     newArr.unshift(array[i]);
//   }
//   return newArr;
// };
const arrayTest = [2, 5, 6, 9, 4, 7];

const reverseArray = function (array) {
  const newArr = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    newArr[array.length - 1 - i] = array[i];
  }
  return newArr;
};

// console.log(reverseArray(arrayTest));
// console.log(arrayTest);

// const reverseArrayInPlace = function (array) {
//   const oldArr = array.slice();
//   for (let i = 0; i < array.length; i++) {
//     array.unshift(oldArr[i]);
//     array.pop();
//   }
//   return array;
// };

const reverseArrayInPlace = function (array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }

  return array;
};

console.log(reverseArrayInPlace(arrayTest));
console.log(arrayTest);
