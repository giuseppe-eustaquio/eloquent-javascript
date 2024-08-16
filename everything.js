const newEveryLoop = function (array, predicate) {
  let i = 0;
  let bool = true;
  while (bool && i < array.length) {
    bool = predicate(array[i]);
    // console.log(bool, i, array[i]);
    i++;
  }
  return bool;
};

console.log(newEveryLoop([4, 5, 2, 1, -1, 0], (a) => a < 5));

const newEverySome = function (array, predicate) {
  //   if (array.some(predicate) === false) {
  //     return false;
  //   }

  let bool = true;
  array.some((a) => {
    if (predicate(a) === false) {
      bool = false;
    }
    // console.log(bool, a);
    return predicate(a);
  });
  return bool;
};

console.log(newEverySome([4, 5, 2, 3, 1, -1, 0], (a) => a > -24));
