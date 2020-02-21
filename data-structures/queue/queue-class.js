class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  add(data) {
    const node = new Node(data);

    if (!this.last) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
  }

  remove() {
    if (this.first) {
      const temp = this.first;
      this.first = this.first.next;

      return temp.data;
    } else {
      return null;
    }
  }
}
