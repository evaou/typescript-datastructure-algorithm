function reverseList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }

    let preNode = null;
    let current = head;
    let next: ListNode | null;

    while (current !== null) {
        next = current.next;
        current.next = preNode;
        preNode = current;
        current = next;
    }

    return preNode;
}
