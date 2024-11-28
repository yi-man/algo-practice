// 3250. 单调数组对的数目 I
function countOfPairs(nums: number[]): number {
  function recur(asc: number, desc: number, startIndex: number): number {
    let count = 0;
    const value = nums[startIndex];

    let nextAsc = asc >= 0 ? asc : 0;
    let nextDesc = value - nextAsc;

    while (nextAsc <= value && nextDesc >= 0) {
      // 下一个必须 <= 上一个
      if (nextDesc <= desc) {
        if (startIndex === nums.length - 1) {
          count++;
        } else {
          // 递归
          count += recur(nextAsc, nextDesc, startIndex + 1);
        }
      }

      nextAsc++;
      nextDesc--;
    }

    return count;
  }

  return recur(-1, Infinity, 0);
}

console.log(countOfPairs([5, 5, 5, 5]));

function countOfPairs2(nums: number[]): number {
  const n = nums.length;
  const m = Math.max(...nums);
  const mod = 1e9 + 7;
  const dp = Array(n)
    .fill(0)
    .map(() => Array(m + 1).fill(0));
  for (let a = 0; a <= nums[0]; a++) {
    dp[0][a] = 1;
  }
  for (let i = 1; i < n; i++) {
    const d = Math.max(0, nums[i] - nums[i - 1]);
    for (let j = d; j <= nums[i]; j++) {
      if (j == 0) {
        dp[i][j] = dp[i - 1][j - d];
      } else {
        dp[i][j] = (dp[i][j - 1] + dp[i - 1][j - d]) % mod;
      }
    }
  }
  let res = 0;
  for (const num of dp[n - 1]) {
    res = (res + num) % mod;
  }
  return res;
}

function countOfPairs3(nums: number[]): number {
  const n = nums.length;
  const dp = Array(n)
    .fill(0)
    .map(() => Array(51).fill(0));
  const mod = 10 ** 9 + 7;
  for (let v = 0; v <= nums[0]; v++) {
    dp[0][v] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let v2 = 0; v2 <= nums[i]; v2++) {
      for (let v1 = 0; v1 <= v2; v1++) {
        if (nums[i - 1] - v1 >= nums[i] - v2 && nums[i] - v2 >= 0) {
          dp[i][v2] = (dp[i][v2] + dp[i - 1][v1]) % mod;
        }
      }
    }
  }

  return dp[n - 1].reduce((sum, v) => (sum + v) % mod, 0);
}
