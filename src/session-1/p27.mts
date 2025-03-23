function removeElement(nums: number[], val: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    while (nums[left] !== val && left <= right) {
      left++;
    }

    if (left > right) {
      break;
    }

    while (nums[right] === val && left <= right) {
      right--;
    }

    if (left > right) {
      break;
    }

    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    left++;
    right--;
  }

  return left;
}

const nums1 = [3, 2, 2, 3];
const k1 = removeElement(nums1, 3);
console.log(nums1, k1);

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
const k2 = removeElement(nums2, 2);
console.log(nums2, k2);
