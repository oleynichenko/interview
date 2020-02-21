// Общий интерфейс компонентов.
interface Graphic {
  move(x, y);
  draw();
}

// Простой компонент.
class Dot implements Graphic {
  x: number;
  y: number;
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  move(x, y) {
    this.x += x;
    this.y += y;
  }

  // Нарисовать точку в координате X, Y.
  draw() {}
}

// Компоненты могут расширять другие компоненты.
class Circle extends Dot {
  radius: number;

  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  // Нарисовать окружность в координате X, Y и радиусом R.
  draw() {}
}

// Контейнер содержит операции добавления/удаления дочерних
// компонентов. Все стандартные операции интерфейса компонентов
// он делегирует каждому из дочерних компонентов.
class CompoundGraphic implements Graphic {
  children: Graphic[];

  // Добавить компонент в список дочерних.
  add(child: Graphic) {}

  // Убрать компонент из списка дочерних.
  remove(child: Graphic) {}

  // 1. Для каждого дочернего компонента:
  //     - Отрисовать компонент.
  //     - Определить координаты максимальной границы.
  // 2. Нарисовать пунктирную границу вокруг всей области.
  move(x, y) {
    for (let child of this.children) {
      child.move(x, y);
    }
  }

  draw() {
    for (let child of this.children) {
      child.draw();
    }
  }
}

// Приложение работает единообразно как с единичными
// компонентами, так и с целыми группами компонентов.
class ImageEditor {
  all: CompoundGraphic;

  load() {
    this.all = new CompoundGraphic();

    this.all.add(new Dot(1, 2));
    this.all.add(new Circle(5, 3, 10));
  }

  // Группировка выбранных компонентов в один сложный
  // компонент. ХЗ ЧТО ЗДЕСЬ ХОТЕЛИ
  // groupSelected(components: Graphic[]) {
  //   const group = new CompoundGraphic();
  //
  //   group.add(components);
  //   this.all.remove(components);
  //   this.all.add(group);
  //   // Все компоненты будут отрисованы.
  //   this.all.draw();
  // }
}

