import { MinPriorityQueue } from "@datastructures-js/priority-queue";

type AdjItem = {
  id: number;
  cost: number;
};

function minCostConnectPoints(points: number[][]): number {
  const adj: AdjItem[][] = Array(points.length)
    .fill(null)
    .map(() => []);

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const distance =
        Math.abs(points[i][0] - points[j][0]) +
        Math.abs(points[i][1] - points[j][1]);

      adj[i].push({ id: j, cost: distance });
      adj[j].push({ id: i, cost: distance });
    }
  }

  const visited = new Set<number>();
  const queue = new MinPriorityQueue<AdjItem>((item) => item.cost);
  queue.enqueue({ id: 0, cost: 0 });

  let totalCost = 0;

  while (visited.size < points.length) {
    const item = queue.dequeue()!;
    if (visited.has(item.id)) {
      continue;
    }

    totalCost += item.cost;
    visited.add(item.id);

    for (const adjacent of adj[item.id]) {
      if (!visited.has(adjacent.id)) {
        queue.enqueue(adjacent);
      }
    }
  }

  return totalCost;
}

console.log(
  minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ]),
);
console.log(
  minCostConnectPoints([
    [3, 12],
    [-2, 5],
    [-4, 1],
  ]),
);
