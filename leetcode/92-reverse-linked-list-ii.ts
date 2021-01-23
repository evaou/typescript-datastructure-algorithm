function reverseBetween(
    head: ListNode | null,
    m: number,
    n: number
): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }

    let pPre = null;
    let pCurrent = head;
    let pNext = pCurrent.next;
    let pos = 1;

    while (pos !== m) {
        pPre = pCurrent;
        pCurrent = pNext;
        pNext = pCurrent.next;
        pos++;
    }

    let pPreM = pPre;
    let pM = pCurrent;

    pPre = null;

    while (pos <= n) {
        pNext = pCurrent.next;
        pCurrent.next = pPre;
        pPre = pCurrent;
        pCurrent = pNext;
        pos++;
    }

    if (pPreM) {
        pPreM.next = pPre;
    } else {
        head = pPre;
    }

    pM.next = pCurrent;

    return head;
}
