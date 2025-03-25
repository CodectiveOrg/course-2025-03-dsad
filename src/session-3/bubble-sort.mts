function sortArray(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    let isSwapped = false;

    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;

        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }
  }

  return nums;
}

console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([5, 1, 1, 2, 0, 0]));
