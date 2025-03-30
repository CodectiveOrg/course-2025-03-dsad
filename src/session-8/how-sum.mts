function howSum(targetSum: number, numbers: number[]): number[] | null {
  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  for (const n of numbers) {
    const result = howSum(targetSum - n, numbers);

    if (result !== null) {
      return [...result, n];
    }
  }

  return null;
}

// console.log(howSum(7, [2, 3]));
console.log(howSum(270, [7, 14]));
