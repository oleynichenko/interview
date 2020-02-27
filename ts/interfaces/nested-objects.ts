// https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types

// Сделать интерфейс для:

const myObj: Obj = {
  name: "test",
  items: {
    "a": {
      id: 1,
      size: 10
    },
    "b": {
      id: 2,
      size: 34
    }
  }
};

interface Item {
  id: number;
  size: number;
}


interface Obj {
  name: string;
  items: {
    [key: string]: Item
  }
}



