export class GenericQueue<T> {
  private items: T[];

  public constructor() {
    this.items = [];
  }

  public enqueue(item: T): void {
    this.items.push(item);
  }

  public dequeue(): T | null {
    if (this.items.length === 0) {
      return null;
    }

    const [item] = this.items.splice(0, 1);
    return item;
  }
}
