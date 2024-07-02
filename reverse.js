const reverseArray = function (array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.unshift(array[i]);
  }
  return newArr;
};
const arrayTest = [2, 5, 6, 9, 4, 7];

// console.log(reverseArray(arrayTest));
// console.log(arrayTest);

const reverseArrayInPlace = function (array) {
  const oldArr = array.slice();
  for (let i = 0; i < array.length; i++) {
    array.unshift(oldArr[i]);
    array.pop();
  }
  return array;
};

console.log(reverseArrayInPlace(arrayTest));
console.log(arrayTest);
