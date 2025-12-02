/**
 给你一个二维整数数组 points，其中 points[i] = [xi, yi] 表示第 i 个点在笛卡尔平面上的坐标。

水平梯形 是一种凸四边形，具有 至少一对 水平边（即平行于 x 轴的边）。两条直线平行当且仅当它们的斜率相同。

返回可以从 points 中任意选择四个不同点组成的 水平梯形 数量。

由于答案可能非常大，请返回结果对 109 + 7 取余数后的值。

示例 1：

输入： points = [[1,0],[2,0],[3,0],[2,2],[3,2]]

输出： 3


 */

function countTrapezoids(points: number[][]): number {
  const MOD = 10 ** 9 + 7;

  // 1. 按 y 坐标分组，统计每个 y 值有多少个点
  const yGroups = new Map<number, number>();
  for (const [x, y] of points) {
    yGroups.set(y, (yGroups.get(y) || 0) + 1);
  }

  // 2. 计算每个 y 值组中选 2 个点的组合数
  // C(n, 2) = n * (n-1) / 2
  const combinations: number[] = [];
  for (const count of yGroups.values()) {
    if (count >= 2) {
      // 只有至少 2 个点才能选 2 个
      combinations.push((count * (count - 1)) / 2);
    }
  }

  // 3. 从不同的 y 值组中选两组，每组选两个点
  // 遍历所有不同的 y 值对 (i, j)，其中 i < j
  let result = 0;
  for (let i = 0; i < combinations.length; i++) {
    for (let j = i + 1; j < combinations.length; j++) {
      // 从第 i 组选 2 个点，从第 j 组选 2 个点
      result = (result + combinations[i] * combinations[j]) % MOD;
    }
  }

  return result;
}

function countTrapezoids2(points: number[][]): number {
  const mod = 1_000_000_007;
  const cnt = new Map<number, number>();

  for (const p of points) {
    cnt.set(p[1], (cnt.get(p[1]) ?? 0) + 1);
  }

  let ans = 0;
  let s = 0;
  for (const v of cnt.values()) {
    // 每个y 可能的边
    const t = (v * (v - 1)) / 2;
    // 和之前的 边 组合
    const mul = BigInt(s) * BigInt(t);
    // 累加结果
    ans = Number((BigInt(ans) + mul) % BigInt(mod));
    // 累加当前的边
    s += t;
  }

  return ans;
}
