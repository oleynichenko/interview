interface Personn {
  name: string;
  say(name: string): string;
}

class Man implements Personn {
  constructor(public name) {}

  say() {
    console.log('Hello! I am ' + this.name);

    return 'Hello! I am ' + this.name;
  }
}

const worker = new Man('Jhon');
worker.say();
