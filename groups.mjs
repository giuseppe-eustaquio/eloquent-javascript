class Group {
  #members = [];
  constructor() {}
  add(value) {
    if (!this.#members.includes(value)) {
      this.#members.push(value);
    }
  }
  delete(value) {
    this.#members = this.#members.filter((item) => item !== value);
  }
  has(value) {
    return this.#members.includes(value);
  }
  get members() {
    return this.#members;
  }
  static from(iterable) {
    let newGroup = new Group();
    for (let item of iterable) {
      newGroup.add(item);
    }
    return newGroup;
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group.members;
  }
  next() {
    if (this.group.length === 0) {
      return { done: true };
    }
    let value = this.group[0];
    this.group = this.group.slice(1);
    return { value, done: false };
  }
}
Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

export { Group, GroupIterator };
