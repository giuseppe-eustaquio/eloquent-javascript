const flatten = function (arrays) {
  const newArray = arrays.reduce((total, current) => {
    return total.concat(current);
  }, []);
  return newArray;
};

console.log(
  flatten([
    [1, 2, 3],
    ["a", "b", "c"],
    [4, 5, 6],
    ["d", "e", "f"],
  ])
);
