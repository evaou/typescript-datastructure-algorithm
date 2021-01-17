function hasCycle(head: ListNode | null): boolean {
    if (head === null) {
        return false;
    }

    let p1: ListNode | null = head;
    let p2: ListNode | null = head;

    while (p1 !== null && p2 !== null) {
        p1 = p1.next;
        p2 = p2.next;
        if (p2) {
            p2 = p2.next;
        }

        if (p1 !== null && p1 === p2) {
            return true;
        }
    }

    return false;
}
