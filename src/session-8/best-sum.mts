function bestSum(targetSum: number, numbers: number[]): number[] | null {
  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
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

  return shortest;
}

// console.log(bestSum(42, [4, 5, 6]));
console.log(bestSum(100, [1, 2, 5, 25]));
