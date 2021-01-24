namespace leetcode146 {
    class Node {
        value: number;
        key: number;
        next: Node | null;
        prev: Node | null;

        constructor(key?: number, value?: number) {
            this.key = key;
            this.value = value;
            this.next = null;
            this.prev = null;
        }
    }

    class LRUCache {
        capacity: number;
        nodeMap: { [key: number]: Node };
        head: Node;
        tail: Node;

        constructor(capacity: number) {
            this.capacity = capacity;
            this.nodeMap = {};

            this.head = new Node();
            this.tail = new Node();
            this.head.next = this.tail;
            this.tail.prev = this.head;
        }

        private _add(node: Node): void {
            let headNext = this.head.next;

            node.next = headNext;
            headNext.prev = node;

            this.head.next = node;
            node.prev = this.head;

            this.nodeMap[node.key] = node;
        }

        private _remove(node: Node): void {
            let nodeNext = node.next;
            let nodePrev = node.prev;

            nodePrev.next = nodeNext;
            nodeNext.prev = nodePrev;

            delete this.nodeMap[node.key];
        }

        private _moveAfterHead(node: Node): void {
            this._remove(node);
            this._add(node);
        }

        get(key: number): number {
            if (key in this.nodeMap) {
                let node = this.nodeMap[key];
                this._moveAfterHead(node);
                return node.value;
            } else {
                return -1;
            }
        }

        put(key: number, value: number): void {
            if (key in this.nodeMap) {
                let node = this.nodeMap[key];
                node.value = value;
                this._moveAfterHead(node);
            } else {
                if (Object.keys(this.nodeMap).length === this.capacity) {
                    let LRUNode = this.tail.prev;
                    this._remove(LRUNode);
                }

                let newNode = new Node(key, value);
                this._add(newNode);
            }
        }
    }
}
