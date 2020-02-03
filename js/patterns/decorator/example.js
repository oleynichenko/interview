class Circle extends Shape {
  constructor(radius = 0) {
    super();
    this.radius = radius;
  }

  resize(factor) {
    this.radius *= factor;
  }
}

class ColoredShape extends Shape {
  constructor(shape, color) {
    super();

    this.shape = shape;
    this.color = color;
  }
}

let circle = new Circle(2);
let redCircle = new ColoredShape(circle, 'red');
