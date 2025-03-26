import { PriorityQueue } from "./priority-queue.mjs";

const queue = new PriorityQueue<number>((a, b) => a - b);

queue.enqueue(4);
queue.enqueue(1);
queue.enqueue(5);
queue.enqueue(3);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
