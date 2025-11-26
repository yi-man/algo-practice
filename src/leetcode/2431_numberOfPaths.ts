/**
 * 
给你一个下标从 0 开始的 m x n 整数矩阵 grid 和一个整数 k 。你从起点 (0, 0) 出发，每一步只能往 下 或者往 右 ，你想要到达终点 (m - 1, n - 1) 。

请你返回路径和能被 k 整除的路径数目，由于答案可能很大，返回答案对 109 + 7 取余 的结果。

 
 */
function numberOfPaths(grid: number[][], k: number): number {
  const MOD = 1e9 + 7;
  const m = grid.length;
  const n = grid[0].length;

  // dp[i][j][r] 表示到达 (i,j) 时路径和模 k 余数为 r 的路径数
  const dp: number[][][] = Array(m)
    .fill(0)
    .map(() =>
      Array(n)
        .fill(0)
        .map(() => Array(k).fill(0))
    );

  // 初始化起点
  dp[0][0][grid[0][0] % k] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;

      const val = grid[i][j];
      for (let r = 0; r < k; r++) {
        const needRemainder = (r - (val % k) + k) % k;
        let count = 0;

        if (i > 0) {
          count = (count + dp[i - 1][j][needRemainder]) % MOD;
        }
        if (j > 0) {
          count = (count + dp[i][j - 1][needRemainder]) % MOD;
        }

        dp[i][j][r] = count;
      }
    }
  }

  return dp[m - 1][n - 1][0];
}
