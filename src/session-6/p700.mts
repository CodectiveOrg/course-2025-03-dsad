import { binaryTreeFromAdjacencyList } from "./utils.mjs";
import { TreeNode } from "./tree-node.mjs";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return null;
  }

  if (val === root.val) {
    return root;
  }

  if (val < root.val) {
    return searchBST(root.left, val);
  }

  return searchBST(root.right, val);
}

const t1 = binaryTreeFromAdjacencyList(
  [4, 2, 7, 1, 3, null, null],
  [
    [1, 2],
    [3, 4],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
  ],
);
console.log(searchBST(t1, 2)?.val ?? null);
console.log(searchBST(t1, 5)?.val ?? null);
