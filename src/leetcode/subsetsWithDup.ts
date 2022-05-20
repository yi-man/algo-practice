export function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = []
  nums.sort((a, b) => a - b);

  function dfs(arr: number[], current: number, tmp: number[] = []) {
      if (current === arr.length) {
          result.push(tmp)

          return
      }

      dfs(arr, current+1, [...tmp, arr[current]])

      if (current > 0 && arr[current] === arr[current - 1]) {
        if(tmp[tmp.length - 1] === arr[current - 1]) {
          return
        }
      }
      dfs(arr, current+1, [...tmp])
  }

  dfs(nums, 0)

  return result
}

/**
"11106" 可以映射为：

"AAJF" ，将消息分组为 (1 1 10 6)
"KJF" ，将消息分组为 (11 10 6)

 */
export function numDecodings(s: string): number {
  const n = s.length;
  const f = new Array(n + 1).fill(0);

  f[0] = 1;
  for (let i = 1; i <= n; ++i) {
      if (s[i - 1] !== '0') {
          f[i] += f[i - 1];
      }
      if (i > 1 && s[i - 2] != '0' && (Number(s[i - 2]) * 10 + Number(s[i - 1]) <= 26)) {
          f[i] += f[i - 2];
      }
  }
  return f[n];
}
