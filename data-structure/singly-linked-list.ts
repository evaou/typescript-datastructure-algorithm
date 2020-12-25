class MyNode {
    value: number;
    next: MyNode | null;
    
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
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
        this.tail = tmpNode;
        this.length++;
    }

    prepend(value: number): void {
        var tmpNode = new MyNode(value);
        tmpNode.next = this.head;
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

        if (index >= this.length) {
            this.append(value);
        } else if (index === 0) {
            this.prepend(value);
        } else {
            preNode = this.traverseToIndex(index - 1);
            tmpNode.next = preNode.next;
            preNode.next = tmpNode; 
            this.length++;
        }

        return;
    }

    remove(index: number): MyNode {
        var preNode: MyNode;
        var removedNode: MyNode;

        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            preNode = this.traverseToIndex(index - 1);
            removedNode = preNode.next;
            preNode.next = removedNode.next; 

            if (index === this.length - 1) {
                this.tail = preNode;
            }
        }

        removedNode.next = null;
        this.length--;

        return removedNode;
    } 
}

var myList = new SinglyLinkedList(10);
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
