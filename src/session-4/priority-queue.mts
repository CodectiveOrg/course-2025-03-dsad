import { GenericQueue } from "./generic-queue.mjs";

type Comparer<T> = (a: T, b: T) => number;

export class PriorityQueue<T> extends GenericQueue<T> {
  private readonly comparer: Comparer<T>;

  public constructor(comparer: Comparer<T>, items: T[] = []) {
    super(items);

    this.comparer = comparer;
  }

  public enqueue(item: T): void {
    this.items.push(item);

    for (let i = this.size() - 1; i > 0; i--) {
      if (this.comparer(this.items[i], this.items[i - 1]) > 0) {
        const temp = this.items[i];
        this.items[i] = this.items[i - 1];
        this.items[i - 1] = temp;
      } else {
        break;
      }
    }
  }
}
