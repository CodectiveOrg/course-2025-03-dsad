const memo = new Map<number, number[] | null>();

function howSum(targetSum: number, numbers: number[]): number[] | null {
  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  if (memo.has(targetSum)) {
    return memo.get(targetSum)!;
  }

  for (const n of numbers) {
    const result = howSum(targetSum - n, numbers);

    if (result !== null) {
      memo.set(targetSum, result);
      return [...result, n];
    }
  }

  memo.set(targetSum, null);
  return null;
}

// console.log(howSum(7, [2, 3]));
console.log(howSum(270, [7, 14]));
