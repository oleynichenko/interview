// Паттерн Фабричный метод применим тогда, когда в программе
// есть иерархия классов продуктов.

interface Button {
  render(a, b);
  onClick(f);
}

class WindowsButton implements Button {
  // Отрисовать кнопку в стиле Windows.
  render(a, b) {}

  // Навесить на кнопку обработчик событий Windows.
  onClick(f) {}
}

class HTMLButton implements Button {
  // Вернуть HTML-код кнопки.
  render(a, b) {}

  // Навесить на кнопку обработчик события браузера.
  onClick(f) {}
}

// Базовый класс фабрики. Заметьте, что "фабрика" — это всего
// лишь дополнительная роль для класса. Скорее всего, он уже
// имеет какую-то бизнес-логику, в которой требуется создание
// разнообразных продуктов.
abstract class Dialog {
  render(a, b) {
    // Чтобы использовать фабричный метод, вы должны
    // убедиться в том, что эта бизнес-логика не зависит от
    // конкретных классов продуктов. Button — это общий
    // интерфейс кнопок, поэтому все хорошо.
    const okButton: Button = this.createButton();
    okButton.onClick(() => {});
    okButton.render(a, b);
  }

  // Мы выносим весь код создания продуктов в особый метод,
  // который назвают "фабричным".
  abstract createButton(): Button;
}

// Конкретные фабрики переопределяют фабричный метод и
// возвращают из него собственные продукты.
class WindowsDialog extends Dialog {
  createButton(): Button {
    return new WindowsButton();
  }
}

class WebDialog extends Dialog {
  createButton(): Button {
    return new HTMLButton();
  }
}


class Application {
  dialog: Dialog;

  // Приложение создаёт определённую фабрику в зависимости от
  // конфигурации или окружения.
  initialize(OS) {
    if (OS == "Windows") {
      this.dialog = new WindowsDialog();
    } else if (OS == "Web") {
      this.dialog = new WebDialog();
    } else {
      throw new Error("Error! Unknown operating system.");
    }
  }

  // Если весь остальной клиентский код работает с фабриками и
  // продуктами только через общий интерфейс, то для него
  // будет не важно, какая фабрика была создана изначально.
  main(OS) {
    this.initialize(OS);
    this.dialog.render(1, 2);
  }
}
