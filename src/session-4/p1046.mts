import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function lastStoneWeight(stones: number[]): number {
  const queue = new MaxPriorityQueue<number>();
  for (let i = 0; i < stones.length; i++) {
    queue.enqueue(stones[i]);
  }

  while (queue.size() > 1) {
    const first = queue.dequeue()!;
    const second = queue.dequeue()!;

    if (first !== second) {
      queue.enqueue(first - second);
    }
  }

  return queue.isEmpty() ? 0 : queue.dequeue()!;
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1]));
