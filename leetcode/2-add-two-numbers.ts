class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let overflow = 0;
  let sum = 0;
  let value1: number;
  let value2: number;
  let head = new ListNode();
  let current = head;

  while (l1 !== null || l2 !== null) {
    value1 = l1 === null ? 0 : l1.val;
    value2 = l2 === null ? 0 : l2.val;

    sum = value1 + value2 + overflow;

    if (sum < 10) {
      current.next = new ListNode(sum);
      overflow = 0;
    } else {
      current.next = new ListNode(sum % 10);
      overflow = Math.floor(sum / 10);
    }

    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  if (overflow) {
    current.next = new ListNode(overflow);
  }

  return head.next;
}
