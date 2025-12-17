function maximumProfit(prices: number[], k: number): number {
  const n = prices.length;
  const memo: number[][][] = Array(n)
    .fill(null)
    .map(() =>
      Array(k + 1)
        .fill(null)
        .map(() => Array(3).fill(-1))
    );

  const dfs = (i: number, j: number, state: number): number => {
    if (j == 0) {
      return 0;
    }
    if (i == 0) {
      return state == 0 ? 0 : state == 1 ? -prices[0] : prices[0];
    }
    if (memo[i][j][state] !== -1) {
      return memo[i][j][state];
    }
    const p = prices[i];
    let res: number;
    if (state === 0) {
      res = Math.max(
        dfs(i - 1, j, 0),
        Math.max(dfs(i - 1, j, 1) + p, dfs(i - 1, j, 2) - p)
      );
    } else if (state === 1) {
      res = Math.max(dfs(i - 1, j, 1), dfs(i - 1, j - 1, 0) - p);
    } else {
      res = Math.max(dfs(i - 1, j, 2), dfs(i - 1, j - 1, 0) + p);
    }
    memo[i][j][state] = res;
    return res;
  };

  return dfs(n - 1, k, 0);
}

function maximumProfit2(prices: number[], k: number): number {
  const n: number = prices.length;
  const dp: number[][][] = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(k + 1);
    for (let j = 0; j <= k; j++) {
      dp[i][j] = new Array(3).fill(0);
    }
  }

  // 初始化第 0 天的状态
  for (let j = 1; j <= k; j++) {
    dp[0][j][1] = -prices[0];
    dp[0][j][2] = prices[0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      dp[i][j][0] = Math.max(
        dp[i - 1][j][0],
        Math.max(dp[i - 1][j][1] + prices[i], dp[i - 1][j][2] - prices[i])
      );
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
      dp[i][j][2] = Math.max(dp[i - 1][j][2], dp[i - 1][j - 1][0] + prices[i]);
    }
  }

  return dp[n - 1][k][0];
}
