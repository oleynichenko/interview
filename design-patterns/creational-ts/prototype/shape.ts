// Базовый прототип.
abstract class Shape {
  X: number;
  Y: number;
  color: string;
  
  // Конструктор прототипа.
  constructor(source: Shape) {
    this.X = source.X;
    this.Y = source.Y;
    this.color = source.color;
  }

  // Результатом операции клонирования всегда будет объект из
  // иерархии классов Shape.
  abstract clone(): Shape;
}

// Конкретный прототип. Метод клонирования создаёт новый объект
// текущего класса, передавая в его конструктор ссылку на
// собственный объект. Благодаря этому операция клонирования
// получается атомарной — пока не выполнится конструктор, нового
// объекта ещё не существует. Но как только конструктор завершит
// работу, мы получим полностью готовый объект-клон, а не пустой
// объект, который нужно ещё заполнить.
class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(source?: Rectangle) {
    // Вызов родительского конструктора нужен, чтобы
    // скопировать потенциальные приватные поля, объявленные
    // в родительском классе.
    super(source);

    this.width = source.width;
    this.height = source.height;
  }

  clone(): Shape {
    return new Rectangle(this);
  }
}

class Circle extends Shape {
  radius: number;

  constructor(source?: Circle) {
    super(source);
    this.radius = source.radius;
  }

  clone(): Shape {
    return new Circle(this);
  }
}

// Где-то в клиентском коде.
class Application {
  shapes: Shape[];

  constructor() {
    const circle = new Circle();

    circle.X = 10;
    circle.Y = 10;
    circle.radius = 20;

    this.shapes.push(circle);

    const anotherCircle = circle.clone();
    this.shapes.push(anotherCircle);
    // anotherCircle будет содержать точную копию circle.

    const rectangle = new Rectangle();

    rectangle.width = 10;
    rectangle.height = 20;

    this.shapes.push(rectangle);
  }

  businessLogic() {
    // Плюс Прототипа в том, что вы можете клонировать набор
    // объектов, не зная их конкретные классы.
    const shapesCopy = [];

    // Например, мы не знаем, какие конкретно объекты
    // находятся внутри массива shapes, так как он объявлен
    // с типом Shape. Но благодаря полиморфизму, мы можем
    // клонировать все объекты «вслепую». Будет выполнен
    // метод clone того класса, которым является этот
    // объект.
    this.shapes.forEach(s => {
      shapesCopy.push(s.clone());
    });

    // Переменная shapesCopy будет содержать точные копии
    // элементов массива shapes.
  }
}

