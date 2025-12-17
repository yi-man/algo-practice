import { TreeNode } from "./tree";

/**-------------------------------- 二叉树最大深度 DFS   start-------------------------------- */
// 遍历 思想模式
const maxDepth = (root: TreeNode | null) => {
  // 记录最大深度
  let res = 0;
  // 记录当前遍历节点的深度
  let depth = 0;

  // 主函数
  const traverse = (root: TreeNode | null) => {
    if (root === null) {
      // 到达叶子节点
      res = Math.max(res, depth);
      return;
    }
    // 前序遍历位置
    depth++;
    traverse(root.left);
    traverse(root.right);
    // 后序遍历位置
    depth--;
  };

  traverse(root);
  return res;
};

// 分解问题   思想模式
const maxDepth2 = (root: TreeNode | null) => {
  if (root == null) {
    return 0;
  }
  // 递归计算左右子树的最大深度
  const leftMax = maxDepth(root.left);
  const rightMax = maxDepth(root.right);
  // 整棵树的最大深度就是左右子树的最大深度加一
  const res = Math.max(leftMax, rightMax) + 1;

  return res;
};

/**-------------------------------- 二叉树最大深度 DFS    end-------------------------------- */

/**-------------------------------- 回溯算法 DFS   start-------------------------------- */
const permute = (nums: number[]) => {
  // 记录所有全排列
  const res: number[][] = [];
  // 记录当前正在穷举的排列
  const track: number[] = [];

  // track 中的元素会被标记为 true，避免重复使用
  const used = new Array(nums.length).fill(false);

  // 主函数，输入一组不重复的数字，返回它们的全排列
  const backtrack = (nums: number[]) => {
    // 到达叶子节点，track 中的元素就是一个全排列
    if (track.length === nums.length) {
      res.push(track.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // 排除不合法的选择
      if (used[i]) {
        // nums[i] 已经在 track 中，跳过
        continue;
      }
      // 做选择
      track.push(nums[i]);
      used[i] = true;

      // 进入递归树的下一层
      backtrack(nums);

      // 取消选择
      track.pop();
      used[i] = false;
    }
  };

  backtrack(nums);
  return res;
};

/**-------------------------------- 回溯算法 DFS   end-------------------------------- */

/**-------------------------------- 动态规划 DP   start-------------------------------- */
const coinChange = (coins: number[], amount: number) => {
  // 题目要求的最终结果是 dp(amount)
  return dp(coins, amount);
};

// 定义：要凑出目标金额 amount，至少要 dp(coins, amount) 个硬币
const dp = (coins: number[], amount: number) => {
  // base case
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  let res = Number.MAX_SAFE_INTEGER;
  for (const coin of coins) {
    // 计算子问题的结果
    const subProblem = dp(coins, amount - coin);
    // 子问题无解则跳过
    if (subProblem === -1) continue;
    // 在子问题中选择最优解，然后加一
    res = Math.min(res, subProblem + 1);
  }

  return res === Number.MAX_SAFE_INTEGER ? -1 : res;
};
/**-------------------------------- 动态规划 DP   end-------------------------------- */

// 原地修改、原地删除
const removeElement = (nums: number[], val: number) => {
  let fast = 0,
    slow = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};

/**
 * 二分查找 伪码
 var binarySearch = function(nums, target) {
    var left = 0, right = nums.length - 1;

   while (...) {
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == target) {
            ...
        } else if (nums[mid] < target) {
            left = ...
        } else if (nums[mid] > target) {
            right = ...
        }
    }
    return ...;
}
 */
const binarySearch = (nums: number[], target: number) => {
  // 标准的二分搜索框架，搜索目标元素的索引，若不存在则返回 -1
  let left = 0;
  // 注意
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      // 注意
      left = mid + 1;
    } else if (nums[mid] > target) {
      // 注意
      right = mid - 1;
    }
  }
  return -1;
};

const left_bound = (nums: number[], target: number) => {
  let left = 0,
    right = nums.length - 1;
  // 搜索区间为 [left, right]
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      // 搜索区间变为 [mid+1, right]
      left = mid + 1;
    } else if (nums[mid] > target) {
      // 搜索区间变为 [left, mid-1]
      right = mid - 1;
    } else if (nums[mid] == target) {
      // 收缩右侧边界
      right = mid - 1;
    }
  }
  // 判断 target 是否存在于 nums 中
  // 如果越界，target 肯定不存在，返回 -1
  // left < 0不存在这种情形，这里的目的是为了一致，保持习惯
  if (left < 0 || left >= nums.length) {
    return -1;
  }
  // 判断一下 nums[left] 是不是 target
  return nums[left] == target ? left : -1;
};

const right_bound = (nums: number[], target: number) => {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] == target) {
      // 别返回，锁定右侧边界
      left = mid + 1;
    }
  }
  // 由于 while 的结束条件是 right == left - 1，且现在在求右边界
  // 所以用 right 替代 left - 1 更好记
  if (right < 0 || right >= nums.length) {
    return -1;
  }
  return nums[right] == target ? right : -1;
};

// 泛化二分查找
/**
function binarySearchGeneralized(): number {
    // 步骤1：确定解空间的左右边界
    let left = 最小可能解;
    let right = 最大可能解;
    
    // 步骤2：定义判定函数
    const isValid = (x: number): boolean => {
        // 实现判定逻辑，返回x是否满足条件
        return true;
    };
    
    // 步骤3：执行二分搜索
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (isValid(mid)) {
            // 可行解，尝试寻找更小的解
            right = mid;
        } else {
            // 不可行解，增大解
            left = mid + 1;
        }
    }
    
    // 步骤4：返回最优解（left == right）
    return left;
}
 */

// 一维前缀和
class NumArray {
  preSum: number[];

  constructor(nums: number[]) {
    // 前缀和数组
    this.preSum = new Array(nums.length + 1).fill(0);

    // preSum[0] = 0，便于计算累加和
    this.preSum[0] = 0;

    // 输入一个数组，构造前缀和
    for (let i = 1; i < this.preSum.length; i++) {
      // 计算 nums 的累加和
      this.preSum[i] = this.preSum[i - 1] + nums[i - 1];
    }
  }

  // 查询闭区间 [left, right] 的累加和
  sumRange(left: number, right: number): number {
    return this.preSum[right + 1] - this.preSum[left];
  }
}

// 二维前缀和
class NumMatrix {
  preSum: number[][];

  constructor(matrix: number[][]) {
    const m = matrix.length,
      n = matrix[0]?.length || 0;
    // preSum[i][j] 记录矩阵 [0, 0, i-1, j-1] 的元素和
    this.preSum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    if (m == 0 || n == 0) return;
    // 构造前缀和矩阵
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        // 计算每个矩阵 [0, 0, i, j] 的元素和
        this.preSum[i][j] =
          this.preSum[i - 1][j] +
          this.preSum[i][j - 1] +
          matrix[i - 1][j - 1] -
          this.preSum[i - 1][j - 1];
      }
    }
  }

  sumRegion(x1: number, y1: number, x2: number, y2: number): number {
    // 计算子矩阵 [x1, y1, x2, y2] 的元素和
    // 目标矩阵之和由四个相邻矩阵运算获得
    return (
      this.preSum[x2 + 1][y2 + 1] -
      this.preSum[x1][y2 + 1] -
      this.preSum[x2 + 1][y1] +
      this.preSum[x1][y1]
    );
  }
}

// 差分数组
class Difference {
  diff: number[];
  constructor(nums: number[]) {
      // 差分数组
      this.diff = new Array(nums.length);
      // 根据初始数组构造差分数组
      this.diff[0] = nums[0];
      for (let i = 1; i < nums.length; i++) {
          this.diff[i] = nums[i] - nums[i - 1];
      }
  }

  // 给闭区间 [i, j] 增加 val（可以是负数）
  increment(i: number, j: number, val: number) {
      this.diff[i] += val;
      if (j + 1 < this.diff.length) {
          this.diff[j + 1] -= val;
      }
  }

  // 返回结果数组
  result(): number[]   {
      const res = new Array(this.diff.length);
      // 根据差分数组构造结果数组
      res[0] = this.diff[0];
      for (let i = 1; i < this.diff.length; i++) {
          res[i] = res[i - 1] + this.diff[i];
      }
      return res;
  }
}