function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => b - a);

  const optionA = nums.at(0)! * nums.at(1)! * nums.at(2)!;
  const optionB = nums.at(0)! * nums.at(-1)! * nums.at(-2)!;

  return Math.max(optionA, optionB);
}

console.log(maximumProduct([1, 2, 3]));
console.log(maximumProduct([1, 2, 3, 4]));
console.log(maximumProduct([-1, -2, -3]));
