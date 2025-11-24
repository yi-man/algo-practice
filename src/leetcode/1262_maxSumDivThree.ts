/**
给你一个整数数组 nums，请你找出并返回能被三整除的元素 最大和。

 

示例 1：

输入：nums = [3,6,5,1,8]
输出：18
解释：选出数字 3, 6, 1 和 8，它们的和是 18（可被 3 整除的最大和）。
示例 2：

输入：nums = [4]
输出：0
解释：4 不能被 3 整除，所以无法选出数字，返回 0。
示例 3：

输入：nums = [1,2,3,4,4]
输出：12
解释：选出数字 1, 3, 4 以及 4，它们的和是 12（可被 3 整除的最大和）。
 

提示：

1 <= nums.length <= 4 * 104
1 <= nums[i] <= 104

 */

function maxSumDivThree(nums: number[]): number {
  const sorted = [...nums].sort();

  // -1 array
  const negArr: number[] = [];
  // +1 array
  const posArr: number[] = [];

  let count = 0;
  // fill negArr, posArr
  for (let i = 0; i < sorted.length; i++) {
    const value = sorted[i];

    if ((value - 1) % 3 === 0) {
      negArr.push(value);
    } else if ((value + 1) % 3 === 0) {
      posArr.push(value);
    }

    count += value;
  }

  const leftV = count % 3;

  let type = 0;
  if (leftV === 1) {
    type = -1;
  } else if (leftV === 2) {
    type = 1;
  }

  if (type === -1) {
    // 总和余1，需要移除余1或两个余2
    let min = Infinity;
    if (negArr.length > 0) {
      min = Math.min(min, negArr[0]);
    }
    if (posArr.length > 1) {
      min = Math.min(min, posArr[0] + posArr[1]);
    }
    if (min !== Infinity) {
      count = count - min;
    } else {
      // 无法移除，返回0
      return 0;
    }
  } else if (type === 1) {
    // 总和余2，需要移除余2或两个余1
    let min = Infinity;
    if (posArr.length > 0) {
      min = Math.min(min, posArr[0]);
    }
    if (negArr.length > 1) {
      min = Math.min(min, negArr[0] + negArr[1]);
    }
    if (min !== Infinity) {
      count = count - min;
    } else {
      // 无法移除，返回0
      return 0;
    }
  }

  return count;
}
