import { TreeNode } from "./tree-node.mjs";
import { binaryTreeFromArray } from "./utils.mjs";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false;
  }

  function dfs(node: TreeNode | null, sum: number): boolean {
    if (node === null) {
      return false;
    }

    if (node.left === null && node.right === null) {
      return sum + node.val === targetSum;
    }

    return dfs(node.left, sum + node.val) || dfs(node.right, sum + node.val);
  }

  return dfs(root, 0);
}

const t1 = binaryTreeFromArray([
  5,
  4,
  8,
  11,
  null,
  13,
  4,
  7,
  2,
  null,
  null,
  null,
  1,
]);
console.log(hasPathSum(t1, 22));

const t2 = binaryTreeFromArray([1, 2, 3]);
console.log(hasPathSum(t2, 5));

const t3 = binaryTreeFromArray([]);
console.log(hasPathSum(t3, 0));

const t4 = binaryTreeFromArray([1, 2]);
console.log(hasPathSum(t4, 1));
