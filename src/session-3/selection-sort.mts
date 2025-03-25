function sortArray(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[indexOfMin]) {
        indexOfMin = j;
      }
    }

    const temp = nums[i];
    nums[i] = nums[indexOfMin];
    nums[indexOfMin] = temp;
  }

  return nums;
}

console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([5, 1, 1, 2, 0, 0]));
