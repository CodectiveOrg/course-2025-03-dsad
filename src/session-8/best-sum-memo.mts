const memo = new Map<number, number[] | null>();

function bestSum(targetSum: number, numbers: number[]): number[] | null {
  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  if (memo.has(targetSum)) {
    return memo.get(targetSum)!;
  }

  let shortest = null;

  for (const n of numbers) {
    const result = bestSum(targetSum - n, numbers);

    if (result !== null) {
      const combination = [...result, n];

      if (shortest === null || combination.length < shortest.length) {
        shortest = combination;
      }
    }
  }

  memo.set(targetSum, shortest);
  return shortest;
}

// console.log(bestSum(7, [2, 3]));
console.log(bestSum(270, [7, 14]));
