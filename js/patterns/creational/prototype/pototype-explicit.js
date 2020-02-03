class Address {
  constructor(country, city, street) {
    this.city = city;
    this.country= country;
    this.street = street;
  }

  deepCopy() {

  }
}

class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  deepCopy() {

  }
}