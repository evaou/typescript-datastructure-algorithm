class MyNode {
    value: number;
    next: MyNode | null;
    prev: MyNode | null;
    
    constructor(value: number) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    head: MyNode | null;
    tail: MyNode | null;
    length: number;

    constructor(value: number) {
        var tmpNode = new MyNode(value);
        this.head = tmpNode;
        
        this.tail = this.head;
        this.length = 1;
    }

    append(value: number): void {
        var tmpNode = new MyNode(value);
        this.tail.next = tmpNode;
        tmpNode.prev = this.tail;
        this.tail = tmpNode;
        this.length++;
    }

    prepend(value: number): void {
        var tmpNode = new MyNode(value);
        tmpNode.next = this.head;
        this.head.prev = tmpNode;
        this.head = tmpNode;
        this.length++
    }

    printList(): void{
        var arr: number[] = [];
        var currentNode: MyNode = this.head;

        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(arr + `, length: ${this.length}`);
    }

    traverseToIndex(index: number): MyNode {
        var currentNode: MyNode = this.head;
        var counter: number = 0;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    insert(index: number, value: number): void {
        var tmpNode = new MyNode(value);
        var preNode: MyNode = this.head;
        var nextNode: MyNode;

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

    remove(index: number): MyNode {
        var preNode: MyNode;
        var nextNode: MyNode;
        var removedNode: MyNode;

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

        var firstNode: MyNode = this.head;
        var secondNode: MyNode = this.head.next;
        var tmpNode: MyNode;

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