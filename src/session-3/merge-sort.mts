function sortArray(nums: number[]): number[] {
  function sort(left: number, right: number): void {
    if (left >= right) {
      return;
    }

    const mid = Math.floor((left + right) / 2);

    sort(left, mid);
    sort(mid + 1, right);

    merge(left, mid, right);
  }

  function merge(left: number, mid: number, right: number): void {
    const leftNums = nums.slice(left, mid + 1);
    const rightNums = nums.slice(mid + 1, right + 1);

    let leftIndex = 0;
    let rightIndex = 0;
    let mergeIndex = left;

    // Compare & Merge
    while (leftIndex < leftNums.length && rightIndex < rightNums.length) {
      if (leftNums[leftIndex] < rightNums[rightIndex]) {
        nums[mergeIndex] = leftNums[leftIndex];
        leftIndex++;
        mergeIndex++;
      } else {
        nums[mergeIndex] = rightNums[rightIndex];
        rightIndex++;
        mergeIndex++;
      }
    }

    // Copy any leftover of leftNums
    while (leftIndex < leftNums.length) {
      nums[mergeIndex] = leftNums[leftIndex];
      leftIndex++;
      mergeIndex++;
    }

    // Copy any leftover of rightNums
    while (rightIndex < rightNums.length) {
      nums[mergeIndex] = rightNums[rightIndex];
      rightIndex++;
      mergeIndex++;
    }
  }

  sort(0, nums.length - 1);

  return nums;
}

console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([5, 1, 1, 2, 0, 0]));
