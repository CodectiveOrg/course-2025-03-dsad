import { Node } from "./linked-list.mjs";
import { sampleHead } from "./sample.mjs";
import { traverse } from "./traverse.mjs";

let head: Node | null = sampleHead;

function addNodeAtIndex(node: Node, targetIndex: number): void {
  let current = head;
  let index = 0;

  while (current !== null) {
    if (index === targetIndex - 1) {
      node.next = current.next;
      current.next = node;
      break;
    }

    current = current.next;
    index++;
  }
}

addNodeAtIndex(new Node(5), 2);
traverse(head);
