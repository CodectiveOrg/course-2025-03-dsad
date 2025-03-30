const n = 40;
const counts = Array(n + 1).fill(0);

const memo = new Map<number, number>();

function fib(n: number): number {
  counts[n]++;

  if (n === 0 || n === 1) {
    return n;
  }

  if (memo.has(n)) {
    return memo.get(n)!;
  }

  const result = fib(n - 1) + fib(n - 2);
  memo.set(n, result);
  return result;
}

console.log(fib(n));

counts.reverse().forEach((count, i) => {
  console.log(`${n - i}: ${count.toLocaleString()}`);
});
