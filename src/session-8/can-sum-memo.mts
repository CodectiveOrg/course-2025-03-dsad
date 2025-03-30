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

// console.log(canSum(42, [4, 5, 6]));
console.log(canSum(270, [7, 14]));
