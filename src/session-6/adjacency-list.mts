import { Node } from "./node.mjs";

const adjacencyList: number[][] = [
  //
  [1, 2],
  [3, 4],
  [5, 6, 7],
  [8, 9],
  [10],
  [],
  [],
  [],
  [],
  [],
  [],
];

const nodes: Node[] = [];
for (let id = 0; id < adjacencyList.length; id++) {
  nodes.push(new Node(id, id));
}

for (let id = 0; id < adjacencyList.length; id++) {
  for (const child of adjacencyList[id]) {
    nodes[id].children.push(nodes[child]);
  }
}

// console.log(nodes[0].children[0].children[1].data);

export const root = nodes[0];
