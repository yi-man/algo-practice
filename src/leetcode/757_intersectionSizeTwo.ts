/**
 给你一个二维整数数组 intervals ，其中 intervals[i] = [starti, endi] 表示从 starti 到 endi 的所有整数，包括 starti 和 endi 。

包含集合 是一个名为 nums 的数组，并满足 intervals 中的每个区间都 至少 有 两个 整数在 nums 中。

例如，如果 intervals = [[1,3], [3,7], [8,9]] ，那么 [1,2,4,7,8,9] 和 [2,3,4,8,9] 都符合 包含集合 的定义。
返回包含集合可能的最小大小。

 

示例 1：

输入：intervals = [[1,3],[3,7],[8,9]]
输出：5
解释：nums = [2, 3, 4, 8, 9].
可以证明不存在元素数量为 4 的包含集合。
示例 2：

输入：intervals = [[1,3],[1,4],[2,5],[3,5]]
输出：3
解释：nums = [2, 3, 4].
可以证明不存在元素数量为 2 的包含集合。 
示例 3：

输入：intervals = [[1,2],[2,3],[2,4],[4,5]]
输出：5
解释：nums = [1, 2, 3, 4, 5].
可以证明不存在元素数量为 4 的包含集合。 
 */

// 贪心， 每个都包含两个
export function intersectionSizeTwo(intervals: number[][]): number {
  // 1. 排序：按右端点升序，右端点相同时按左端点降序
  intervals.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1]; // 右端点升序
    }
    return b[0] - a[0]; // 左端点降序
  });

  // 2. 维护已选择的元素集合（用数组存储，方便检查）
  const selected: number[] = [];

  // 3. 遍历每个区间
  for (const [start, end] of intervals) {
    // 计算当前区间已包含多少个已选择的元素
    let count = 0;
    for (const num of selected) {
      if (num >= start && num <= end) {
        count++;
      }
    }

    // 如果已包含的元素少于2个，需要添加新元素
    if (count < 2) {
      let need = 2 - count; // 还需要添加的元素个数

      // 从右端开始添加元素（贪心：让元素尽可能覆盖后续区间）
      for (let i = end; i >= start && need > 0; i--) {
        // 检查这个元素是否已经被选择
        if (!selected.includes(i)) {
          selected.push(i);

          need--;
        }
      }
    }
  }

  return selected.length;
}
