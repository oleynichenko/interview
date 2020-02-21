class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head  = new Node(data, this.head.next);
  }

  size() {
    let index = 0;
    let node = this.head;

    while (node !== null) {
      index++;
      node = node.next;
    }

    return index;
  }
}