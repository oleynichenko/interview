class Integer {
  constructor(value) {
    this.value = value;
  }

  accept(visitor) {
    visitor.visitValue(this.value);
  }
}

class BinaryExpression {
  constructor(lhs, rhs) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  accept() {

  }
}

class AdditionExpression extends BinaryExpression {
  constructor(lhs, rhs) {
    super(lhs, rhs);
  }

  accept(visitor) {
    visitor.visitAddition(this);
  }
}

class MultiplicationExpression extends BinaryExpression {
  constructor(lhs, rhs) {
    super(lhs, rhs);
  }

  accept(visitor) {
    visitor.visitMultiplication(this);
  }
}

class ExpressionPrinter {
  constructor() {
    this.buffer = [];
  }

  visitValue(value) {
    this.buffer.push(value);
  }

  visitAddition(ae) {
    this.buffer.push('(');
    ae.lhs.accept(this);
    this.buffer.push('+');
    ae.rhs.accept(this);
    this.buffer.push(')');
  }

  visitMultiplication(me) {
    this.buffer.push('(');
    me.lhs.accept(this);
    this.buffer.push('*');
    me.rhs.accept(this);
    this.buffer.push(')');
  }

  toString() {
    return this.buffer.join('');
  }
}

const ep = new AdditionExpression(
  new MultiplicationExpression(
    new Integer(2),
    new Integer(3)
  ),
  new Integer(3)
);

const printer = new ExpressionPrinter();
printer.visitAddition(ep);

console.log(printer.toString()); // (2+3)