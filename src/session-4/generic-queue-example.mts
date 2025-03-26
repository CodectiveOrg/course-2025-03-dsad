import { GenericQueue } from "./generic-queue.mjs";

const queue = new GenericQueue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.dequeue());
