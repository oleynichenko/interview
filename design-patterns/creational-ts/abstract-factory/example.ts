// Этот паттерн предполагает, что у вас есть несколько семейств
// продуктов, находящихся в отдельных иерархиях классов
// (Button/Checkbox). Продукты одного семейства должны иметь
// общий интерфейс.
interface Button {
  paint();
}

// Семейства продуктов имеют те же вариации (macOS/Windows).
class WinButton implements Button {
  // Отрисовать кнопку в стиле Windows.
  paint() {}
}

class MacButton implements Button {
  // Отрисовать кнопку в стиле macOS.
  paint() {}
}

interface Checkbox {
  paint();
}

class WinCheckbox implements Checkbox {
  // Отрисовать чекбокс в стиле Windows.
  paint() {}
}

class MacCheckbox implements Checkbox {
  // Отрисовать чекбокс в стиле macOS.
  paint() {}
}

// Абстрактная фабрика знает обо всех абстрактных типах продуктов.
interface GUIFactory {
  createButton(): Button
  createCheckbox(): Checkbox
}

// Каждая конкретная фабрика знает и создаёт только продукты
// своей вариации.
class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton()
  }

  createCheckbox(): Checkbox {
    return new WinCheckbox()
  }
}

// Несмотря на то, что фабрики оперируют конкретными классами,
// их методы возвращают абстрактные типы продуктов. Благодаря
// этому фабрики можно взаимозаменять, не изменяя клиентский код.
class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

// Для кода, использующего фабрику, не важно, с какой конкретно
// фабрикой он работает. Все получатели продуктов работают с
// ними через общие интерфейсы.
class Application {
  private button: Button;

  constructor (private factory: GUIFactory) { }

  createUI() {
    this.button = this.factory.createButton();
  }

  paint() {
    this.button.paint();
  }
}

// Приложение выбирает тип конкретной фабрики и создаёт её
// динамически, исходя из конфигурации или окружения.
class ApplicationConfigurator {
  app: Application;

  main(os) {
    let factory: GUIFactory;

    if (os == "Windows") {
      factory = new WinFactory();
    } else if (os == "Mac") {
      factory = new MacFactory();
    } else {
      throw new Error("Error! Unknown operating system.");
    }

    this.app = new Application(factory)
  }
}

