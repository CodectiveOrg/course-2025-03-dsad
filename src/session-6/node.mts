export class Node<T = number> {
  public data: T;
  public children: Node<T>[];

  public constructor(data: T) {
    this.data = data;
    this.children = [];
  }
}
