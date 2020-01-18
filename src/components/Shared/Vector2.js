export class Vector2 {

  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  multiply(scalar) {
    return new Vector2(this.x * scalar, this.y * scalar);
  }

  divide(scalar) {
    return new Vector2(this.x / scalar, this.y / scalar);
  }

  add(scalar) {
    return new Vector2(this.x + scalar, this.y + scalar);
  }

  subtract(scalar) {
    return new Vector2(this.x - scalar, this.y - scalar);
  }

  addVec(otherVec) {
    return new Vector2(this.x + otherVec.x, this.y + otherVec.y);
  }

  subtractVec(otherVec) {
    return new Vector2(this.x - otherVec.x, this.y - otherVec.y);
  }

  // returns the distance squared. Better for performance than real distance.
  sqrDistance(otherVector) {
    return Math.pow(this.x - otherVector.x, 2) + Math.pow(this.y - otherVector.y, 2);
  }

  distance(otherVec) {
    return Math.sqrt(this.sqrDistance(otherVec));
  }

  normalize() {
    let magnitude = this.magnitude;
    this.x /= magnitude;
    this.y /= magnitude;
  }

  get magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  toString() {
    console.log("(" + this.x + ", " + this.y + ")");
  }
}

