/**
 * 26. 删除有序数组中的重复项
 * 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
 */
function removeDuplicates(nums: number[]): number {
  let cursor = 0;
  const visited = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!visited.has(nums[i])) {
      visited.add(nums[i]);
      nums[cursor] = nums[i];
      cursor++;
    }
  }

  return cursor;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

//  * 80. 删除有序数组中的重复项 II
function removeDuplicates2(nums: number[]): number {
  let cursor = 0;
  const visited = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const count = visited.get(nums[i]) || 0;

    if (count < 2) {
      visited.set(nums[i], count + 1);
      nums[cursor] = nums[i];
      cursor++;
    }
  }

  return cursor;
}
