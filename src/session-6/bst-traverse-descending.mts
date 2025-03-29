import { binaryTreeFromAdjacencyList } from "./utils.mjs";
import { TreeNode } from "./tree-node.mjs";

function bstTraverseDescending(node: TreeNode | null): void {
  if (node === null) {
    return;
  }

  bstTraverseDescending(node.right);
  console.log(node.val);
  bstTraverseDescending(node.left);
}

const t1 = binaryTreeFromAdjacencyList(
  [8, 3, 10, 1, 6, null, 14],
  [
    [1, 2],
    [3, 4],
    [null, 6],
    [null, null],
    [null, null],
    [null, null],
  ],
);
bstTraverseDescending(t1);
