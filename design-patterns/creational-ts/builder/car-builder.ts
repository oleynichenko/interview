// Строитель может создавать различные продукты, используя один
// и тот же процесс строительства.
class Car { }
// Автомобили могут отличаться комплектацией: типом
// двигателя, количеством сидений, могут иметь или не иметь
// GPS и систему навигации и т. д. Кроме того, автомобили
// могут быть городскими, спортивными или внедорожниками.

// Руководство пользователя для данной конфигурации
// автомобиля.
class Manual { }

// Интерфейс строителя объявляет все возможные этапы и шаги
// конфигурации продукта.
interface Builder {
  reset(): any;
  setSeats(count: number): any;
  setEngine(): any;
  setTripComputer(): any;
  setGPS(): any;
}

// Все конкретные строители реализуют общий интерфейс по-своему.
class CarBuilder implements Builder {
  private car: Car;
  
  // Поместить новый объект Car в поле "car".
  reset() {}

  // Установить указанное количество сидений.
  setSeats() {}

  // Установить поданный двигатель.
  setEngine() {}

  // Установить поданную систему навигации.
  setTripComputer() {}

  // Установить или снять GPS.
  setGPS() {}

  // Вернуть текущий объект автомобиля.
  getResult(): Car {
    return this.car;
  }
}

// В отличие от других порождающих паттернов, где продукты
// должны быть частью одной иерархии классов или следовать
// общему интерфейсу, строители могут создавать совершенно
// разные продукты, которые не имеют общего предка.
class CarManualBuilder implements Builder {
  private manual: Manual;

  // Поместить новый объект Manual в поле "manual".
  reset() {}

  // Описать, сколько мест в машине.
  setSeats(count) {}

  // Добавить в руководство описание двигателя.
  setEngine() {}

  // Добавить в руководство описание системы навигации.
  setTripComputer() {}

  // Добавить в инструкцию инструкцию GPS.
  setGPS() {}

  // Вернуть текущий объект руководства.
  getResult(): Manual {
    return this.manual;
  }
}

// Директор знает, в какой последовательности нужно заставлять
// работать строителя, чтобы получить ту или иную версию
// продукта. Заметьте, что директор работает со строителем через
// общий интерфейс, благодаря чему он не знает тип продукта,
// который изготовляет строитель.
class Director {
  constructSportsCar(builder: Builder) {
    builder.reset();
    builder.setSeats(2);
    builder.setEngine();
    builder.setTripComputer();
    builder.setGPS() ;
  }
}


// Директор получает объект конкретного строителя от клиента
// (приложения). Приложение само знает, какого строителя нужно
// использовать, чтобы получить определённый продукт.
class Application {
  makeCar() {
    const director = new Director();
    const builder = new CarBuilder();

    director.constructSportsCar(builder);
    const car = builder.getResult();

    const manualBuilder = new CarManualBuilder();
    director.constructSportsCar(manualBuilder);

    // Готовый продукт возвращает строитель, так как
    // директор чаще всего не знает и не зависит от
    // конкретных классов строителей и продуктов.
    const manual = manualBuilder.getResult();
  }
}

