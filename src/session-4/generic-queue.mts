export class GenericQueue<T> {
  private items: T[];

  public constructor() {
    this.items = [];
  }

  public enqueue(item: T): void {
    this.items.push(item);
  }

  public dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const [item] = this.items.splice(0, 1);
    return item;
  }

  public front(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[0];
  }

  public back(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.items.length - 1];
  }

  public size(): number {
    return this.items.length;
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public clear(): void {
    this.items = [];
  }

  public toString(): string {
    return this.items.join(", ");
  }
}
