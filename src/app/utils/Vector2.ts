export class Vector2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  multiply(scalar: number) {
    return new Vector2(this.x * scalar, this.y * scalar);
  }

  divide(scalar: number) {
    return new Vector2(this.x / scalar, this.y / scalar);
  }

  add(scalar: number) {
    return new Vector2(this.x + scalar, this.y + scalar);
  }

  subtract(scalar: number) {
    return new Vector2(this.x - scalar, this.y - scalar);
  }

  addVec(otherVec: Vector2) {
    return new Vector2(this.x + otherVec.x, this.y + otherVec.y);
  }

  subtractVec(otherVec: Vector2) {
    return new Vector2(this.x - otherVec.x, this.y - otherVec.y);
  }

  // returns the distance squared. Better for performance than real distance.
  sqrDistance(otherVector: Vector2) {
    return (
      Math.pow(this.x - otherVector.x, 2) + Math.pow(this.y - otherVector.y, 2)
    );
  }

  distance(otherVec: Vector2) {
    return Math.sqrt(this.sqrDistance(otherVec));
  }

  normalize() {
    const magnitude = this.magnitude;
    this.x /= magnitude;
    this.y /= magnitude;
  }

  clamp(from: Vector2, to: Vector2) {
    if (this.x < from.x) {
      this.x = from.x;
    } else if (this.x > to.x) {
      this.x = to.x;
    }
    if (this.y < from.y) {
      this.y = from.y;
    } else if (this.y > to.y) {
      this.y = to.y;
    }
  }

  get magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  toString() {
    console.log('(' + this.x + ', ' + this.y + ')');
  }
}
