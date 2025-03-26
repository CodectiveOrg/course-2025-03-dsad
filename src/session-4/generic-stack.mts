export class GenericStack<T> {
  private items: T[];

  public constructor(items: T[] = []) {
    this.items = [...items];
  }

  public push(item: T): void {
    this.items.push(item);
  }

  public pop(): T | null {
    if (this.size()) {
      return null;
    }

    const [item] = this.items.splice(this.size() - 1, 1);
    return item;
  }

  public top(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.size() - 1];
  }

  public bottom(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[0];
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
