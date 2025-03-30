function canSum(targetSum: number, numbers: number[]): boolean {
  const table = Array(targetSum + Math.max(...numbers) + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (const n of numbers) {
        table[i + n] = true;
      }
    }
  }

  return table[targetSum];
}

// console.log(canSum(7, [2, 3]));
console.log(canSum(270, [7, 14]));
