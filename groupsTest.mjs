import { Group, GroupIterator } from "./groups.mjs";
const fromFunction = Group.from([1, 2, 3]);
console.log(fromFunction.members);
console.log(fromFunction.has(1));
console.log(fromFunction.has(2));
console.log(fromFunction.has(3));
console.log(fromFunction.has(4));

const groupOne = new Group();
groupOne.add("a");
groupOne.add("b");
groupOne.add("c");
groupOne.add("d");
console.log(groupOne.has("a"));
groupOne.add("c");
console.log(groupOne.has("e"));
groupOne.delete("a");
console.log(groupOne.has("a"));

const igroup = Group.from([3, 2, 1]);
for (let element of igroup) {
  console.log(element);
}
