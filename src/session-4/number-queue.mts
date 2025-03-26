export class NumberQueue {
  private items: number[];

  public constructor() {
    this.items = [];
  }

  public enqueue(item: number): void {
    this.items.push(item);
  }

  public dequeue(): number | null {
    if (this.items.length === 0) {
      return null;
    }

    const [item] = this.items.splice(0, 1);
    return item;
  }
}
