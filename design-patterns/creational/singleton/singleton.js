// Singleton may be a problem when you take a direct dependency of it. Introduce a dependency instead

class Singleton {
  constructor() {
    const instance = Singleton.instance;

    if (instance) {
      return instance;
    }

    Singleton.instance = this;
  }
}

const single = new Singleton();
const single2 = new Singleton();

console.log(single === single2);
