class Vec {
  constructor(x, y) {
    (this.x = x), (this.y = y);
  }
  plus(vector) {
    return new Vec(this.x + vector.x, this.y + vector.y);
  }
  minus(vector) {
    return new Vec(Math.abs(this.x - vector.x), Math.abs(this.y - vector.y));
  }
  get length() {
    return this.x ** 2 + this.y ** 2;
  }
}

export { Vec };
