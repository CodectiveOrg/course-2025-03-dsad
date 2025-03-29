const values = [38, 24, 31, 67, 6, 13, 68, 71, 23, 3];
const adj = [[1, 2, 3], [], [], [4], [], [], [5, 7], [8], [9], [0]];

function dfs(target: number, id: number, visited: Set<number>): boolean {
  if (visited.has(id)) {
    return false;
  }

  visited.add(id);

  if (values[id] === target) {
    return true;
  }

  for (const adjacent of adj[id]) {
    const result = dfs(target, adjacent, visited);
    if (result) {
      return true;
    }
  }

  return false;
}

function findTarget(target: number): boolean {
  const visited = new Set<number>();

  for (let id = 0; id < values.length; id++) {
    const result = dfs(target, id, visited);
    if (result) {
      return true;
    }
  }

  return false;
}

console.log(findTarget(23));
