namespace QueueByStack {
  class Queue {
    first: number[];
    last: number[];

    constructor() {
      this.first = [];
      this.last = [];
    }

    enqueue(x: number): void {
      this.last.push(x);
    }

    dequeue(): number {
      if (this.first.length === 0) {
        let lastLength: number = this.last.length;
        for (let i = 0; i < lastLength; i++) {
          this.first.push(this.last.pop());
        }
      }

      return this.first.pop();
    }

    peek(): number {
      if (this.first.length > 0) {
        return this.first[this.first.length - 1];
      } else {
        return this.last[0];
      }
    }

    isEmpty(): boolean {
      if (this.first.length || this.last.length) {
        return false;
      }

      return true;
    }
  }

  let myQueue: Queue = new Queue();
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  myQueue.enqueue(4);

  console.log(myQueue.dequeue());
  myQueue.enqueue(5);

  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
}
