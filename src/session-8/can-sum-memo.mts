const memo = new Map<number, boolean>();

function canSum(targetSum: number, numbers: number[]): boolean {
  if (targetSum === 0) {
    return true;
  }

  if (targetSum < 0) {
    return false;
  }

  if (memo.has(targetSum)) {
    return memo.get(targetSum)!;
  }

  for (const n of numbers) {
    if (canSum(targetSum - n, numbers)) {
      memo.set(targetSum, true);
      return true;
    }
  }

  memo.set(targetSum, false);

  return false;
}

// console.log(canSum(7, [2, 3]));
console.log(canSum(400, [7, 14]));
