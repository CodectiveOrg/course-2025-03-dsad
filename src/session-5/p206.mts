import { ListNode } from "./list-node.mjs";

function reverseList(current: ListNode | null): ListNode | null {
  if (current === null || current.next === null) {
    return current;
  }

  const reverseHead = reverseList(current.next);

  current.next.next = current;
  current.next = null;

  return reverseHead;
}

console.log(reverseList(ListNode.of([1, 2, 3, 4, 5]))?.toString());
console.log(reverseList(ListNode.of([1, 2]))?.toString());
