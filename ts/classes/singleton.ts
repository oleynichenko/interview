class Singleton {
  private static instance: Singleton;

  private constructor(private data: string) { }

  static getInstance(data) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(data);
    }

    return Singleton.instance;
  }
}

const single = Singleton.getInstance("hello");
const single1 = Singleton.getInstance("bye");

console.log(single === single1);