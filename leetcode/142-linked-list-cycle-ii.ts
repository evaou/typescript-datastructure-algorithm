class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }

    let slow = head;
    let fast = head;

    do {
        slow = slow.next;
        fast = fast.next;

        if (!fast || !fast.next) {
            return null;
        } else {
            fast = fast.next;
        }
    } while (slow !== fast);

    let p1 = head;
    let p2 = fast;

    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p1;
}

function detectCycle2(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }

    let seenNode = new Set();
    let current = head;

    while (!seenNode.has(current)) {
        if (!current.next) {
            return null;
        }

        seenNode.add(current);
        current = current.next;
    }

    return current;
}
