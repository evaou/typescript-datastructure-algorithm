namespace leetcode430 {
    class Node {
        val: number;
        next: Node | null;
        prev: Node | null;
        child: Node | null;

        constructor(val?: number, next?: Node | null, child?: Node | null) {
            this.val = val === undefined ? 0 : val;
            this.next = next === undefined ? null : next;
            this.prev = next === undefined ? null : next;
            this.child = child === undefined ? null : child;
        }
    }

    function flatten(head: Node | null): Node | null {
        if (head === null) {
            return head;
        }

        let current = head;
        let currentNext: Node | null;

        while (current !== null) {
            if (current.child !== null) {
                currentNext = current.next;
                current.next = current.child;
                current.child.prev = current;

                let childNextTail = current.child;
                while (childNextTail.next !== null) {
                    childNextTail = childNextTail.next;
                }

                if (currentNext !== null) {
                    childNextTail.next = currentNext;
                    currentNext.prev = childNextTail;
                }

                current.child = null;
            }

            current = current.next;
        }

        return head;
    }
}
