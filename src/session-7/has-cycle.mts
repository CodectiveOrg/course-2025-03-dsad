const adj = [[1], [2], [], [2], [3], [0, 3, 4]];

function dfs(
  id: number,
  visited: Set<number>,
  visitedDuringThisIteration: Set<number>,
): boolean {
  if (visitedDuringThisIteration.has(id)) {
    return true;
  }

  visitedDuringThisIteration.add(id);

  for (const adjacent of adj[id]) {
    if (visited.has(adjacent)) {
      continue;
    }

    const result = dfs(adjacent, visited, visitedDuringThisIteration);
    if (result) {
      return true;
    }
  }

  visited.add(id);
  return false;
}

function hasCycle(): boolean {
  const visited = new Set<number>();

  for (let id = 0; id < adj.length; id++) {
    if (visited.has(id)) {
      continue;
    }

    const visitedDuringThisIteration = new Set<number>();

    const result = dfs(id, visited, visitedDuringThisIteration);
    if (result) {
      return true;
    }
  }

  return false;
}

console.log(hasCycle());
