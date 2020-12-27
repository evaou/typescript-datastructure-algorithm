class MyNode {
  value: string;
  next: MyNode | null;

  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  first: MyNode | null;
  last: MyNode | null;
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(): MyNode | null {
    return this.first;
  }

  enqueue(value: string): Queue {
    const newNode: MyNode = new MyNode(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  }

  dequeue(): MyNode | null {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    const resultNode: MyNode | null = this.first;

    this.first = this.first.next;
    resultNode.next = null;
    this.length--;

    return resultNode;
  }
}

var myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
console.log(myQueue);
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
