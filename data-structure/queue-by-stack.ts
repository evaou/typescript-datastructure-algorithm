class Queue2 {
  first: number[];
  last: number[];

  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(x: number): void {
    let firstLength: number = this.first.length;
    for (let i = 0; i < firstLength; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(x);
  }

  dequeue(): number {
    let lastLength: number = this.last.length;
    for (let i = 0; i < lastLength; i++) {
      this.first.push(this.last.pop());
    }

    return this.first.pop();
  }

  peek(): number {
    if (this.last.length > 0) {
      return this.last[0];
    }

    return this.first[this.first.length - 1];
  }

  isEmpty(): boolean {
    if (this.first.length || this.last.length) {
      return false;
    }

    return true;
  }
}

let myQueue2: Queue2 = new Queue2();
myQueue2.enqueue(1);
myQueue2.enqueue(2);
myQueue2.enqueue(3);
myQueue2.enqueue(4);

console.log(myQueue2.dequeue());
myQueue2.enqueue(5);

console.log(myQueue2.dequeue());
console.log(myQueue2.dequeue());
console.log(myQueue2.dequeue());
console.log(myQueue2.dequeue());