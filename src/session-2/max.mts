function max(nums: number[], index: number = 0): number {
  if (index === nums.length - 1) {
    return nums[index];
  }

  const otherMax = max(nums, index + 1);
  return nums[index] > otherMax ? nums[index] : otherMax;
}

console.log(max([23, 16, 42, 15, 4, 8]));
