class Bird {
  constructor(age = 0) {
    this.age = age;
  }

  fly() {
    return this.age < 10 ? 'flying' : 'too old';
  }
}

class Lizard {
  constructor(age = 0) {
    this.age = age;
  }

  crawl() {
    return this.age > 1 ? 'crawling' : 'too young';
  }
}

class Dragon {
  constructor(age = 0) {
    this._age = age;
    this._lizard = new Lizard(this.age);
    this._bird = new Bird(this.age);
  }

  set age(value) {
    this._age = value;
    this._bird.age = value;
    this._lizard.age = value;
  }

  get age() {
    return this._age;
  }

  fly = () => this._bird.fly();

  crawl = () => this._lizard.crawl();
}

const dragon = new Dragon(34);

console.log(dragon.crawl());
console.log(dragon.fly());