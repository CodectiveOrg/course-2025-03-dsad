import { Node } from "./node.mjs";
import { root } from "./adjacency-list.mjs";
import { GenericQueue } from "../session-4/generic-queue.mjs";

function bfs(root: Node) {
  const queue = new GenericQueue<Node>();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const node = queue.dequeue()!;
    console.log(node.data);

    for (const child of node.children) {
      queue.enqueue(child);
    }
  }
}

bfs(root);
