const n = 40;
const counts = new Array(n + 1).fill(0);

function fib(n: number): number {
  counts[n]++;

  if (n === 0 || n === 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(n));

counts.reverse().forEach((count, i) => {
  console.log(`${n - i}: ${count.toLocaleString()}`);
});
