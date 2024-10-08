// const deepEqual = function (val1, val2) {
//   if (val1 === val2) {
//     return true;
//   } else {
//   }
// };

function deepEqual(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  let keysA = Object.keys(a),
    keysB = Object.keys(b);
  if (keysA.length != keysB.length) return false;
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}
console.log(deepEqual(null, null));
