class Order {
  constructor(cost = null) {
    this.cost = cost;
    this.orders = [];
  }

  get sum() {
    if (this.cost !== null) {
      return this.cost;
    } else {
      let sum = 0;

      for (let order of this.orders) {
        sum += order.sum;
      }

      // console.log(sum);

      return sum;
    }
  }
}

function sum(orders) {
  let sum = 0;

  for (let i of orders) {
    sum += i.sum;
  }

  return sum;
}

const box1 = new Order();
const order1 = new Order(1);
box1.orders.push(order1);

const box2 = new Order();
const order2 = new Order(2);
box2.orders.push(order2);

const box3 = new Order();
box3.orders.push(box1);
box3.orders.push(box2);

console.log(sum([box3]));

