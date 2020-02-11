class Address {
  constructor(country, city, street) {
    this.city = city;
    this.country= country;
    this.street = street;
  }
}

class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

class Serializer {
  constructor(types) {
    this.types = types;
  }

  markRecursive(obj) {
    const idx = this.types.findIndex((type) => {
      return type.name === obj.constructor.name;
    });

    if (idx !== -1) {
      obj.typeIndex = idx;

      for (let prop in obj) {
        if (obj.hasOwnProperty(prop) && obj[prop] != null) {
          this.markRecursive(obj[prop]);
        }
      }
    }
  }

  reconstructRecursive(object) {
    if (object.hasOwnProperty('typeIndex')) {
      let type = this.types[object.typeIndex];
      let obj = new type();

      for (let key in object) {
        if (object.hasOwnProperty(key) && object[key] != null) {
          obj[key] = this.reconstructRecursive(object[key]);
        }
      }

      delete obj.typeIndex;
      return obj;
    }

    return object;
  }

  clone(obj) {
    this.markRecursive();

    const clone = JSON.parse(JSON.stringify());

    return this.reconstructRecursive(clone);
  }
}

let john = new Person(
  'John',
  new Address('123 London Road', 'London', 'UK')
);

let s = new Serializer([Person,Address]);

jane = s.clone(john);
jane.name = 'Jane';
jane.address.streetAddress = '321 Angel St';
