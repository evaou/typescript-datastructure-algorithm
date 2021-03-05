class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  let dummyHead = new ListNode();
  let cur = dummyHead;
  let tmpL1 = l1;
  let tmpL2 = l2;

  while (tmpL1 !== null && tmpL2 !== null) {
    if (tmpL1.val <= tmpL2.val) {
      cur.next = tmpL1;
      tmpL1 = tmpL1.next;
    } else {
      cur.next = tmpL2;
      tmpL2 = tmpL2.next;
    }

    cur = cur.next;
  }

  if (tmpL1 !== null) {
    cur.next = tmpL1;
  }

  if (tmpL2 !== null) {
    cur.next = tmpL2;
  }

  return dummyHead.next;
}
