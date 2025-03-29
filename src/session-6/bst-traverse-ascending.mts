import { binaryTreeFromAdjacencyList } from "./utils.mjs";
import { TreeNode } from "./tree-node.mjs";

function bstTraverseAscending(node: TreeNode | null): void {
  if (node === null) {
    return;
  }

  bstTraverseAscending(node.left);
  console.log(node.val);
  bstTraverseAscending(node.right);
}

const t1 = binaryTreeFromAdjacencyList(
  [8, 3, 10, 1, 6, 14],
  [
    [1, 2],
    [3, 4],
    [null, 5],
    [null, null],
    [null, null],
    [null, null],
  ],
);
bstTraverseAscending(t1);
