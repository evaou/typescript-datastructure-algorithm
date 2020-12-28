namespace QueueByLinkedList {
    class Node {
        value: string;
        next: Node | null;

        constructor(value: string) {
            this.value = value;
            this.next = null;
        }
    }

    class Queue {
        first: Node | null;
        last: Node | null;
        length: number;

        constructor() {
            this.first = null;
            this.last = null;
            this.length = 0;
        }

        peek(): Node | null {
            return this.first;
        }

        enqueue(value: string): Queue {
            const newNode: Node = new Node(value);

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

        dequeue(): Node | null {
            if (!this.first) {
                return null;
            }

            if (this.first === this.last) {
                this.last = null;
            }

            const resultNode: Node | null = this.first;

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
}
