import { sampleHead } from "./sample.mjs";
import { Node } from "./linked-list.mjs";
import { traverse } from "./traverse.mjs";

let head: Node | null = sampleHead;

function removeNodeByIndex(targetIndex: number): void {
  if (targetIndex === 0) {
    head = head?.next ?? null;
    return;
  }

  let current = head;
  let index = 0;

  while (current !== null) {
    if (index === targetIndex - 1) {
      current.next = current.next?.next ?? null;
      break;
    }

    current = current.next;
    index++;
  }
}

removeNodeByIndex(2);
traverse(head);
