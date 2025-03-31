function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => a - b);

  const optionA = nums.at(-1)! * nums.at(-2)! * nums.at(-3)!;
  const optionB = nums.at(-1)! * nums.at(0)! * nums.at(1)!;

  return Math.max(optionA, optionB);
}

console.log(maximumProduct([1, 2, 3]));
console.log(maximumProduct([1, 2, 3, 4]));
console.log(maximumProduct([-1, -2, -3]));
