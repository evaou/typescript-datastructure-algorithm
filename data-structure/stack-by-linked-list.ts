class MyNode {
  value: string;
  next: MyNode | null;

  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: MyNode | null;
  bottom: MyNode | null;
  length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(): MyNode | null {
    return this.top;
  }

  pop(): MyNode | null {
    if (!this.top) {
      return null;
    }

    let result: MyNode | null = null;

    result = this.top;
    this.top = this.top.next;
    result.next = null;
    this.length--;

    if (this.length === 0) {
      this.bottom = null;
    }

    return result;
  }

  push(value: string): Stack {
    const newNode: MyNode = new MyNode(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;

    return this;
  }

  isEmpty(): boolean {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
console.log(myStack);
console.log(myStack.peek());

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
