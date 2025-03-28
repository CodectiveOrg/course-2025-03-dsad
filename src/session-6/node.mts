export class Node<T = number> {
  public id: number;
  public data: T;
  public children: Node<T>[];

  public constructor(id: number, data: T) {
    this.id = id;
    this.data = data;
    this.children = [];
  }
}
