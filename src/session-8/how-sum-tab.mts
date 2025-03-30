function howSum(targetSum: number, numbers: number[]): number[] | null {
  const table = Array(targetSum + Math.max(...numbers) + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (const n of numbers) {
        table[i + n] = [...table[i], n];
      }
    }
  }

  return table[targetSum];
}

// console.log(howSum(42, [4, 5, 6]));
console.log(howSum(270, [7, 14]));
