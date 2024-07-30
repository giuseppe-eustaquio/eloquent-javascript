import { exportScripts } from "./scripts.mjs";

const SCRIPTS = exportScripts();

const characterScript = function (code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
};

// console.log(characterScript(121));
// console.log("b".codePointAt(0));

const countBy = function (items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find((c) => c.name === name);
    if (!known) {
      counts.push({ name, count: 1 });
    } else {
      known.count++;
    }
  }
  return counts;
};

// console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));

// console.log(characterScript("英".codePointAt(0)));

const dominantDirection = function (chars) {
  const array = countBy(
    chars,
    (n) => characterScript(n.codePointAt(0)).direction
  );
  console.log(array);
  return array.reduce((prev, current) => {
    return prev.count > current.count ? prev : current;
  });
};

// console.log(dominantDirection("英W"));
console.log(dominantDirection("ꡃ英aa国вخش𐡀"));
