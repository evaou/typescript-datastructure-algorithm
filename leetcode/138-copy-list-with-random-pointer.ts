namespace leetcode138 {
  class Node {
    val: number;
    next: Node | null;
    random: Node | null;
    constructor(val?: number, next?: Node, random?: Node) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
      this.random = random === undefined ? null : random;
    }
  }

  // time: O(N)
  function copyRandomList(head: Node | null): Node | null {
    let tmpNode: Node;
    let current: Node | null;
    let dummyHead: Node | null = new Node(0);

    current = head;
    while (current !== null) {
      tmpNode = new Node(current.val);
      tmpNode.next = current.next;
      current.next = tmpNode;

      current = tmpNode.next;
    }

    current = head;
    while (current !== null) {
      tmpNode = current.next;

      if (current.random !== null) {
        tmpNode.random = current.random.next;
      }

      current = tmpNode.next;
    }

    let currentNext: Node | null;
    let currentCopy: Node | null;
    let tmpCopy: Node | null;
    current = head;
    currentCopy = dummyHead;
    while (current !== null) {
      if (current.next !== null) {
        currentNext = current.next.next;
      } else {
        currentNext = current.next;
      }

      tmpCopy = current.next;
      currentCopy.next = tmpCopy;
      currentCopy = tmpCopy;

      current.next = currentNext;
      current = currentNext;
    }

    return dummyHead.next;
  }
}
