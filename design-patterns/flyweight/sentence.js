class WordToken {
  constructor(capitalize = false) {
    this.capitalize = capitalize;
  }
}

class Sentence {
  constructor(plainText) {
    this.words = plainText.split(' ');
    this.tokens = {};
  }

  at(index) {
    this.tokens[index] = new WordToken();

    return this.tokens[index];
  }

  toString() {
    let buffer = [];

    for (let i = 0; i < this.words.length; ++i) {
      let w = this.words[i];

      if (this.tokens[i] && this.tokens[i].capitalize)
        w = w.toUpperCase();

      buffer.push(w);
    }

    return buffer.join(' ');
  }
}

let s = new Sentence("alpha beta gamma");

s.at(1).capitalize = true;

console.log(s.toString());