const memo = new Map<string, number>();

function gridTraveler(m: number, n: number): number {
  if (m === 1 && n === 1) {
    return 1;
  }

  if (m === 0 || n === 0) {
    return 0;
  }

  const hashed = hash(m, n);

  if (memo.has(hashed)) {
    return memo.get(hashed)!;
  }

  const result = gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
  memo.set(hashed, result);
  return result;
}

function hash(m: number, n: number): string {
  return `${m}:${n}`;
}

// console.log(gridTraveler(3, 2));
console.log(gridTraveler(15, 15));
