const n = 100;
const counts = new Array(n + 1).fill(0);

const memo = new Map<number, number>();

function fibMemo(n: number): number {
  counts[n]++;

  if (n === 0 || n === 1) {
    return n;
  }

  if (memo.has(n)) {
    return memo.get(n)!;
  }

  const result = fibMemo(n - 1) + fibMemo(n - 2);
  memo.set(n, result);
  return result;
}

console.log(fibMemo(n));

counts.reverse().forEach((count, i) => {
  console.log(`${n - i}: ${count.toLocaleString()}`);
});
