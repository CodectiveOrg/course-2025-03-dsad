function findLongestChain(pairs: number[][]): number {
  pairs.sort((a, b) => a[1] - b[1]);

  let count = 1;
  let latestPair = pairs[0];

  for (const pair of pairs) {
    if (latestPair[1] < pair[0]) {
      count++;
      latestPair = pair;
    }
  }

  return count;
}

console.log(
  findLongestChain([
    [1, 2],
    [2, 3],
    [3, 4],
  ]),
);
console.log(
  findLongestChain([
    [1, 2],
    [7, 8],
    [4, 5],
  ]),
);
