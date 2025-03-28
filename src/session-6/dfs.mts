import { Node } from "./node.mjs";
import { root } from "./adjacency-list.mjs";

function dfs(node: Node): void {
  console.log(node.data);

  for (const child of node.children) {
    dfs(child);
  }
}

dfs(root);
