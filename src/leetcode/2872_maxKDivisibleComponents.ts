/**
 * 给你一棵 n 个节点的无向树，节点编号为 0 到 n - 1 。给你整数 n 和一个长度为 n - 1 的二维整数数组 edges ，其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 有一条边。

同时给你一个下标从 0 开始长度为 n 的整数数组 values ，其中 values[i] 是第 i 个节点的 值 。再给你一个整数 k 。

你可以从树中删除一些边，也可以一条边也不删，得到若干连通块。一个 连通块的值 定义为连通块中所有节点值之和。如果所有连通块的值都可以被 k 整除，那么我们说这是一个 合法分割 。

请你返回所有合法分割中，连通块数目的最大值 。
 */

function maxKDivisibleComponents2(
  n: number,
  edges: number[][],
  values: number[],
  k: number
): number {
  // 选edge， 从0到edges.length
  // 计算连通块数目
  // 如果联通可被k整除，与之前的max比较，更新max
  // 返回max
}

function maxKDivisibleComponents(
  n: number,
  edges: number[][],
  values: number[],
  k: number
): number {
  // 1. 构建无向图
  const graph: number[][] = Array(n)
    .fill(0)
    .map(() => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  // 2. DFS 函数
  // 返回 [子树的值之和(模k), 子树能形成的最大连通块数]
  function dfs(u: number, parent: number): [number, number] {
    let sum = values[u] % k; // 当前子树的值之和（模 k）
    let count = 0; // 当前子树能形成的连通块数

    // 3. 遍历所有子节点
    for (const v of graph[u]) {
      if (v === parent) continue; // 跳过父节点

      const [childSum, childCount] = dfs(v, u); // 递归处理子树

      // 4. 如果子树和能被 k 整除，可以切掉
      if (childSum % k === 0) {
        count += childCount + 1; // 子树的连通块数 + 1个新块
        // sum 不变，因为子树已经被切掉，不贡献值
      } else {
        count += childCount; // 累加子树的连通块数
        sum = (sum + childSum) % k; // 累加到当前子树
      }
    }

    return [sum, count];
  }

  // 5. 从节点 0 开始 DFS
  const [rootSum, rootCount] = dfs(0, -1);

  // 6. 如果整棵树的值能被 k 整除，返回结果
  // 注意：如果 rootSum % k === 0，说明根节点所在的连通块也满足条件
  // 此时总连通块数 = rootCount + 1（根节点所在的连通块）
  // 但如果 rootCount 已经包含了根节点，就不需要 +1
  // 实际上，如果 rootSum % k === 0，说明根节点所在的连通块也满足条件
  // 但 rootCount 统计的是切掉的子树形成的连通块数
  // 所以如果 rootSum % k === 0，总连通块数 = rootCount + 1
  // 否则，无法形成合法分割，返回 0

  if (rootSum % k === 0) {
    return rootCount + 1; // 加上根节点所在的连通块
  } else {
    return 0; // 无法形成合法分割
  }
}
