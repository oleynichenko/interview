class Shape {
  constructor(name, renderer) {
    this.name = name;
    this.renderer = renderer;
  }

  toString() {
    return `Drawing ${this.name} as ${this.renderer.renderedAs}`;
  }
}

class Triangle extends Shape {
  constructor(renderer) {
    super('triangle', renderer);
  }
}

class Square extends Shape {
  constructor(renderer) {
    super('square', renderer);
  }
}

class VectorRenderer {
  get renderedAs() {
    return 'lines';
  }
}

class RasterRenderer {
  get renderedAs() {
    return 'pixels';
  }
}

// class VectorSquare extends Square {
//   toString() {
//     return `Drawing square as lines`;
//   }
// }
//
// class RasterSquare extends Square {
//   toString() {
//     return `Drawing square as pixels`;
//   }
// }

const message = new Triangle(new RasterRenderer()).toString();

console.log(message);

