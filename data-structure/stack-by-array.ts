class Stack {
    array: string[];

    constructor() {
        this.array = [];
    }

    peek(): string | null {
        return this.array[this.array.length - 1];
    }

    pop(): string | null {
        if (this.array.length === 0) {
            return null;
        }

        return this.array.pop();
    }

    push(value: string): Stack {
        this.array.push(value);

        return this;
    }

    isEmpty(): boolean {
        if (this.array.length === 0) {
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
