import { TreeNode } from "./tree-node.mjs";

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

const t1 = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))),
);
console.log(hasPathSum(t1, 22));

const t2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(hasPathSum(t2, 5));

const t3 = null;
console.log(hasPathSum(t3, 0));

const t4 = new TreeNode(1, new TreeNode(2));
console.log(hasPathSum(t4, 1));
