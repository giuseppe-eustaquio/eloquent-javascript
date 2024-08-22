import { Vec } from "./vector.mjs";

const newVec = new Vec(4, 2);
const newerVec = new Vec(5, 8);
const newestVec = newVec.plus(newerVec);
const diffVec = newVec.minus(newerVec);
console.log(newestVec);
console.log(diffVec);
console.log(newVec.length);
