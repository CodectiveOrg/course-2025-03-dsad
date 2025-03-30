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

// console.log(canSum(42, [4, 5, 6]));
console.log(canSum(270, [7, 14]));
