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
      const combination = [...result, n];
      memo.set(targetSum, combination);
      return combination;
    }
  }

  memo.set(targetSum, null);
  return null;
}

// console.log(howSum(42, [4, 5, 6]));
console.log(howSum(5864, [7, 14]));
