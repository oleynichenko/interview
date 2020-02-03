class Singleton {
  protected static _instance: Singleton = new Singleton;
  protected foo :number = 123;

  private constructor() {}

  public static getInstance(): Singleton {
    return Singleton._instance;
  }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2);

