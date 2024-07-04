let sampleList = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

const prepend = function (list, newElement) {
  list = {
    value: newElement,
    rest: { ...list },
  };
  return list;
};

const nth = function (list, number) {
  if (number === 0) {
    return list["value"];
  } else if (list["rest"] === null) {
    return null;
  } else {
    return nth(list["rest"], number - 1);
  }
};

const arrayToList = function (array) {
  let emptyList = { rest: null };
  array.forEach((element) => {
    emptyList = prepend(emptyList, element);
  });
  return emptyList;
};

const listToArray = function (list) {
  const newArr = [];

  do {
    newArr.push(list["value"]);
    list = list["rest"];
  } while (list["rest"] != null);
  newArr.push(list["value"]);
  return newArr;
};

// console.log(arrayToList([1, 2, 3]));
// console.log(nth(sampleList, 24));
// console.log(listToArray(sampleList));
