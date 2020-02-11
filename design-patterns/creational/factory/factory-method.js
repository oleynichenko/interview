class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho*Math.cos(theta), rho*Math.sin(theta));
  }
}

let p2 = Point.newPolarPoint(5, Math.PI/2);
console.log(p2);

// this line will not work if newCartesianPoint is static!
let p3 = Point.newCartesianPoint(2, 3);
console.log(p3);