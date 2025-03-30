function bestSum(targetSum: number, numbers: number[]): number[] | null {
  const table = Array(targetSum + Math.max(...numbers) + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (const n of numbers) {
        const combination = [...table[i], n];

        if (table[i + n] === null || combination.length < table[i + n].length) {
          table[i + n] = [...table[i], n];
        }
      }
    }
  }

  return table[targetSum];
}

// console.log(bestSum(7, [2, 3]));
// console.log(bestSum(270, [7, 14]));
console.log(bestSum(100, [1, 2, 5, 25]));
