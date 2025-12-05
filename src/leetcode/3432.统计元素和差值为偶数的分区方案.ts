/*
 * @lc app=leetcode.cn id=3432 lang=typescript
 * @lcpr version=30304
 *
 * [3432] 统计元素和差值为偶数的分区方案
 */

// @lc code=start
function countPartitions(nums: number[]): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
  }
  if (count % 2 !== 0) {
    return 0;
  }

  return nums.length - 1;
}
// @lc code=end

/*
// @lcpr case=start
// [10,10,3,7,6]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [2,4,6,8]\n
// @lcpr case=end

 */
