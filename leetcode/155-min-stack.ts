namespace leetcode115 {
  class Node {
    val: number;
    min: number;
    next: Node | null;

    constructor(val: number, min: number, next: Node = null) {
      this.val = val;
      this.min = min;
      this.next = next;
    }
  }

  class MinStack {
    head: Node | null;

    constructor() {
      this.head = null;
    }

    push(x: number): void {
      if (this.head) {
        this.head = new Node(x, Math.min(this.head.min, x), this.head);
      } else {
        this.head = new Node(x, x);
      }
    }

    pop(): void {
      this.head = this.head.next;
    }

    top(): number {
      return this.head.val;
    }

    getMin(): number {
      return this.head.min;
    }
  }
}
