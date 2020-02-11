// actualize the idea of single responsibility

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static get factory() {
    return new PointFactory();
  }
}

class PointFactory {
  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho*Math.cos(theta), rho*Math.sin(theta));
  }
}

let p2 = PointFactory.newPolarPoint(5, Math.PI/2);
console.log(p2);

let p3 = Point.factory.newCartesianPoint(2, 3);
console.log(p3);