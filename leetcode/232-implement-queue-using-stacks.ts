class MyQueue {
    first: number[];
    last: number[];

    constructor() {
        this.first = [];
        this.last = [];
    }

    push(x: number): void {
        let firstLength: number = this.first.length;
        for (let i = 0; i < firstLength; i++) {
            this.last.push(this.first.pop());
        }
        this.last.push(x);
    }

    pop(): number {
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

    empty(): boolean {
        if (this.first.length || this.last.length) {
            return false;
        }

        return true;
    }
}

var obj = new MyQueue();
obj.push(1);
obj.push(2);
obj.push(3);
obj.push(4);
console.log(obj.pop());
obj.push(5);
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
