/**
 * 爱吃香蕉的珂珂 leetcode 875
 * @param piles
 * @param h
 * @returns
 */
function minEatingSpeed(piles: number[], h: number): number {
  // 步骤1：确定解空间
  let left = 1;
  let right = Math.max(...piles);

  // 步骤2：定义判定函数
  const isValid = (k: number): boolean => {
    let totalHours = 0;
    for (const pile of piles) {
      // 计算每堆需要的时间，向上取整
      totalHours += Math.ceil(pile / k);
      // 提前终止，优化性能
      if (totalHours > h) {
        return false;
      }
    }
    return totalHours <= h;
  };

  // 步骤3：二分搜索
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (isValid(mid)) {
      // 可行解，尝试更小的速度
      right = mid;
    } else {
      // 不可行，增大速度
      left = mid + 1;
    }
  }

  // 步骤4：返回最优解
  return left;
}

/**
 * 在 D 天内送达包裹的能力 leetcode 1011
 * @param weights
 * @param days
 * @returns
 */
export const shipWithinDays = (weights: number[], days: number): number => {
  // 步骤1：确定解空间
  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b, 0);

  // 步骤2：定义判定函数
  const isValid = (capacity: number): boolean => {
    let currentLoad = 0;
    let requiredDays = 1; // 至少需要1天
    for (const weight of weights) {
      if (currentLoad + weight > capacity) {
        // 超过运载能力，需要新的一天
        requiredDays += 1;
        currentLoad = weight;
        // 提前终止
        if (requiredDays > days) {
          return false;
        }
      } else {
        currentLoad += weight;
      }
    }
    return requiredDays <= days;
  };

  // 步骤3：二分搜索
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (isValid(mid)) {
      // 可行解，尝试更小的运载能力
      right = mid;
    } else {
      // 不可行，增大运载能力
      left = mid + 1;
    }
  }

  // 返回最优解
  return left;
};

/**
 * 分割数组的最大值 leetcode 410
 * @param nums
 * @param m
 * @returns
 */
function splitArray(nums: number[], m: number): number {
  // 步骤1：确定解空间
  let left = Math.max(...nums);
  let right = nums.reduce((a, b) => a + b, 0);

  // 步骤2：定义判定函数
  const isValid = (maxSum: number): boolean => {
    let currentSum = 0;
    let splits = 1; // 初始为1个子数组
    for (const num of nums) {
      if (currentSum + num > maxSum) {
        // 分割，子数组数量加1
        splits += 1;
        currentSum = num;
        // 提前终止
        if (splits > m) {
          return false;
        }
      } else {
        currentSum += num;
      }
    }
    return splits <= m;
  };

  // 步骤3：二分搜索
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (isValid(mid)) {
      // 可行解，尝试更小的最大值
      right = mid;
    } else {
      // 不可行，增大最大值
      left = mid + 1;
    }
  }

  // 返回最优解
  return left;
}
