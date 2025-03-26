import { GenericQueue } from "./generic-queue.mjs";

function timeRequiredToBuy(tickets: number[], k: number): number {
  const queue = new GenericQueue<number>();
  for (let i = 0; i < tickets.length; i++) {
    queue.enqueue(tickets[i]);
  }

  let index = k;
  let time = 0;

  while (queue.size() > 1) {
    time++;

    let item = queue.dequeue()!;
    index--;

    item--;

    if (item > 0) {
      queue.enqueue(item);
    }

    if (index === -1) {
      if (item === 0) {
        return time;
      }

      index = queue.size() - 1;
    }
  }

  return time + queue.dequeue()!;
}

console.log(timeRequiredToBuy([2, 3, 2], 2));
console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
