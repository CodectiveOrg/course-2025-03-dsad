function canSum(targetSum: number, numbers: number[]): boolean {
  if (targetSum === 0) {
    return true;
  }

  if (targetSum < 0) {
    return false;
  }

  for (const n of numbers) {
    if (canSum(targetSum - n, numbers)) {
      return true;
    }
  }

  return false;
}

// console.log(canSum(7, [2, 3]));
console.log(canSum(200, [7, 14]));
