/**
 There are a row of n houses, each house can be painted with one of the k colors. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.

The cost of painting each house with a certain color is represented by an n x k cost matrix costs.

For example, costs[0][0] is the cost of painting house 0 with color 0; costs[1][2] is the cost of painting house 1 with color 2, and so on...
Return the minimum cost to paint all houses.
 

Example 1:
Input: costs = [[1,5,3],[2,9,4]]
Output: 5
Explanation:
Paint house 0 into color 0, paint house 1 into color 2. Minimum cost: 1 + 4 = 5; 
Or paint house 0 into color 2, paint house 1 into color 0. Minimum cost: 3 + 2 = 5.

Example 2:
Input: costs = [[1,3],[2,4]]
Output: 5 

Constraints:
costs.length == n
costs[i].length == k
1 <= n <= 100
2 <= k <= 20
1 <= costs[i][j] <= 20 

 */
export function paintHouse(costs: number[][]): number {
  if (!costs || costs.length === 0) {
    return 0;
  }

  const n = costs.length; // 房子个数
  const k = costs[0].length; // 颜色个数

  // dp[i][j] 表示粉刷前 i 个房子，且第 i 个房子使用颜色 j 的最小成本
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(k).fill(0));

  // 初始化：第一个房子用每种颜色的成本
  for (let j = 0; j < k; j++) {
    dp[0][j] = costs[0][j];
  }

  // 填充 dp 数组
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < k; j++) {
      // 找到前一个房子使用除 j 以外所有颜色的最小成本
      let minPrev = Infinity;
      for (let prevColor = 0; prevColor < k; prevColor++) {
        if (prevColor !== j) {
          minPrev = Math.min(minPrev, dp[i - 1][prevColor]);
        }
      }
      dp[i][j] = minPrev + costs[i][j];
    }
  }

  // 返回最后一个房子使用所有颜色中的最小成本
  return Math.min(...dp[n - 1]);
}
