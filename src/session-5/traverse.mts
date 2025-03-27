import { Node } from "./linked-list.mjs";

export function traverse(head: Node | null): void {
  let current = head;

  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}
