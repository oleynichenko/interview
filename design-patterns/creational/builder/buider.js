class Field {
  constructor(name) {
    this.name = name;
  }
}

class Class {
  constructor(className) {
    this.className = className;
    this.fields = [];
  }

  toString() {
    const params = this.fields.reduce((res, f, i) => {
      return i === 0 ? `${f.name}` : `${res}, ${f.name}`;
    }, '');

    const argsBlock = this.fields.reduce((res, f, i) => {
      return i === 0
        ? `this.${f.name} = ${f.name}`
        : `${res},\n this.${f.name} = ${f.name}`;
    }, '');

    return `
    class ${this.className} {
      constructor(${params}) {
        ${argsBlock}
      }
    }
    `;
  }
}

class ClassBuilder {
  constructor(className) {
    this.class = new Class(className);
  }

  addField(name) {
    this.class.fields.push(new Field(name));

    return this;
  }

  build() {
    return this.class.toString();
  }
}

const cb = new ClassBuilder('Person');

cb
  .addField('name')
  .addField('ss')
  .addField('age');

console.log(cb.build());