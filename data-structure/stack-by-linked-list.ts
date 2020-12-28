namespace StackByLinkedList {
    class Node {
        value: string;
        next: Node | null;

        constructor(value: string) {
            this.value = value;
            this.next = null;
        }
    }

    class Stack {
        top: Node | null;
        bottom: Node | null;
        length: number;

        constructor() {
            this.top = null;
            this.bottom = null;
            this.length = 0;
        }

        peek(): Node | null {
            return this.top;
        }

        pop(): Node | null {
            if (!this.top) {
                return null;
            }

            let result: Node | null = null;

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
            const newNode: Node = new Node(value);

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
}
