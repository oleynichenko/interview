// Класс одиночки определяет статический метод `getInstance`,
// который позволяет клиентам повторно использовать одно и то же
// подключение к базе данных по всей программе.
class Database {
  // Поле для хранения объекта-одиночки должно быть объявлено
  // статичным.
  private static instance: Database;

  // Конструктор одиночки всегда должен оставаться приватным,
  // чтобы клиенты не могли самостоятельно создавать
  // экземпляры этого класса через оператор `new`.
  private constructor() {}
  // Здесь может жить код инициализации подключения к
  // серверу баз данных.
  // ...

  // Основной статический метод одиночки служит альтернативой
  // конструктору и является точкой доступа к экземпляру этого
  // класса.
  public static getInstance(): Database {
    if (Database.instance === null) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  // Наконец, любой класс одиночки должен иметь какую-то
  // полезную функциональность, которую клиенты будут
  // запускать через полученный объект одиночки.
  // Все запросы к базе данных будут проходить через этот
  // метод. Поэтому имеет смысл поместить сюда какую-то
  // логику кеширования.
  // ...
  public query(sql) {}
}

class Application {
  main() {
    const foo: Database = Database.getInstance();
    foo.query("SELECT ...");
  }
}
