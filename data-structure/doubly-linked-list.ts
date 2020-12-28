namespace DoublyLinkedList {
    class Node {
        value: number;
        next: Node | null;
        prev: Node | null;

        constructor(value: number) {
            this.value = value;
            this.next = null;
            this.prev = null;
        }
    }

    class DoublyLinkedList {
        head: Node | null;
        tail: Node | null;
        length: number;

        constructor(value: number) {
            var tmpNode = new Node(value);
            this.head = tmpNode;

            this.tail = this.head;
            this.length = 1;
        }

        append(value: number): void {
            var tmpNode = new Node(value);
            this.tail.next = tmpNode;
            tmpNode.prev = this.tail;
            this.tail = tmpNode;
            this.length++;
        }

        prepend(value: number): void {
            var tmpNode = new Node(value);
            tmpNode.next = this.head;
            this.head.prev = tmpNode;
            this.head = tmpNode;
            this.length++;
        }

        printList(): void {
            var arr: number[] = [];
            var currentNode: Node = this.head;

            while (currentNode) {
                arr.push(currentNode.value);
                currentNode = currentNode.next;
            }

            console.log(arr + `, length: ${this.length}`);
        }

        traverseToIndex(index: number): Node {
            var currentNode: Node = this.head;
            var counter: number = 0;

            while (counter !== index) {
                currentNode = currentNode.next;
                counter++;
            }

            return currentNode;
        }

        insert(index: number, value: number): void {
            var tmpNode = new Node(value);
            var preNode: Node = this.head;
            var nextNode: Node;

            if (index >= this.length) {
                this.append(value);
            } else if (index === 0) {
                this.prepend(value);
            } else {
                preNode = this.traverseToIndex(index - 1);
                nextNode = preNode.next;

                tmpNode.next = nextNode;
                nextNode.prev = tmpNode;
                preNode.next = tmpNode;
                tmpNode.prev = preNode;

                this.length++;
            }

            return;
        }

        remove(index: number): Node {
            var preNode: Node;
            var nextNode: Node;
            var removedNode: Node;

            if (index === 0) {
                removedNode = this.head;
                this.head = this.head.next;
                this.head.prev = null;
            } else {
                preNode = this.traverseToIndex(index - 1);
                removedNode = preNode.next;
                nextNode = removedNode.next;
                preNode.next = nextNode;

                if (index === this.length - 1) {
                    this.tail = preNode;
                } else {
                    nextNode.prev = preNode;
                }
            }

            removedNode.next = null;
            removedNode.prev = null;
            this.length--;

            return removedNode;
        }

        reverse(): void {
            if (this.length === 1) {
                return;
            }

            var firstNode: Node = this.head;
            var secondNode: Node = this.head.next;
            var tmpNode: Node;

            while (secondNode) {
                tmpNode = secondNode.next;
                secondNode.next = firstNode;
                secondNode.prev = tmpNode;
                firstNode = secondNode;
                secondNode = tmpNode;
            }

            this.head.prev = this.head.next;
            this.head.next = null;
            this.tail = this.head;
            this.head = firstNode;

            return;
        }
    }

    var myList = new DoublyLinkedList(10);
    myList.append(5);
    myList.printList();

    myList.append(16);
    myList.printList();

    myList.prepend(1);
    myList.printList();

    myList.insert(1, 3);
    myList.printList();

    myList.insert(100, 99);
    myList.printList();

    console.log(myList.remove(3));
    myList.printList();

    myList.reverse();
    myList.printList();
}
