export class Node<T = number> {
  public data: T;
  public next: Node<T> | null;

  public constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
