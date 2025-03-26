import { GenericQueue } from "./generic-queue.mjs";

class RecentCounter {
  private readonly queue: GenericQueue<number>;

  public constructor() {
    this.queue = new GenericQueue<number>();
  }

  public ping(t: number): number {
    this.queue.enqueue(t);

    while (this.queue.front()! < t - 3000) {
      this.queue.dequeue();
    }

    return this.queue.size();
  }
}

const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));
console.log(recentCounter.ping(100));
console.log(recentCounter.ping(3001));
console.log(recentCounter.ping(3002));
