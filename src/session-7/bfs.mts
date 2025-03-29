import { GenericQueue } from "../session-4/generic-queue.mjs";

const values = [38, 24, 31, 67, 6, 13, 68, 71, 23, 3];
const adj = [[1, 2, 3], [], [], [4], [], [], [5, 7], [8], [9], [0]];

function bfs(target: number, id: number, visited: Set<number>): boolean {
  if (values[id] === target) {
    return true;
  }

  const queue = new GenericQueue<number>();
  queue.enqueue(id);

  while (!queue.isEmpty()) {
    const nodeId = queue.dequeue()!;

    if (visited.has(nodeId)) {
      continue;
    }

    visited.add(nodeId);

    for (const adjacent of adj[nodeId]) {
      if (values[adjacent] === target) {
        return true;
      }

      queue.enqueue(adjacent);
    }
  }

  return false;
}

function findTarget(target: number): boolean {
  const visited = new Set<number>();

  for (let id = 0; id <= values.length; id++) {
    const result = bfs(target, id, visited);
    if (result) {
      return true;
    }
  }

  return false;
}

console.log(findTarget(23));
