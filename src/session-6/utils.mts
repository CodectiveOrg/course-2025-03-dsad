import { TreeNode } from "./tree-node.mjs";

export function binaryTreeFromArray(
  values: (number | null)[],
): TreeNode | null {
  if (values.length === 0) {
    return null;
  }

  const nodes: (TreeNode | null)[] = values.map((value) =>
    value ? new TreeNode(value) : null,
  );

  nodes.forEach((node, i) => {
    if (i === 0 || node === null) {
      return;
    }

    const parent = nodes[Math.floor((i - 1) / 2)]!;
    if (i / 2 === 1) {
      parent.left = node;
    } else {
      parent.right = node;
    }
  });

  return nodes[0];
}

export function binaryTreeFromAdjacencyList(
  values: number[],
  adjacencyList: [number | null, number | null][],
): TreeNode {
  const nodes: TreeNode[] = [];
  for (let i = 0; i < values.length; i++) {
    nodes.push(new TreeNode(values[i]));
  }

  adjacencyList.forEach((children, i) => {
    nodes[i].left = children[0] ? nodes[children[0]] : null;
    nodes[i].right = children[1] ? nodes[children[1]] : null;
  });

  return nodes[0];
}
