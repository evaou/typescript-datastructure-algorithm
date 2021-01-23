function flatten(head: Node | null): Node | null {
    if (
        head === null ||
        (head.next === null && head.child === null && head.prev === null)
    ) {
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
