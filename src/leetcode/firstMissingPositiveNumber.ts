/**
 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

 */

function swap(nums: number[], index1: number, index2: number) {
  const temp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
}

export function firstMissingPositiveNumber(nums: number[]) {
  for(let i=0; i<nums.length; i++){
    while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
      swap(nums, nums[nums[i] - 1], nums[i]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
        return i + 1;
    }
  }
  // 都正确则返回数组长度 + 1
  return nums.length + 1;
}