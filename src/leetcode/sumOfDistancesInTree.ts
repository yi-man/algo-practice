/**
 * https://leetcode.cn/problems/sum-of-distances-in-tree/
 *
 把 i 当做树的根节点，j 为其中一个子节点
设节点 j 共有 {count[j]}count[j] 个子孙节点（即包含子节点的子节点等）
则从 i 到 j 的转移过程中，有 {count[j]}count[j] 个节点距离缩短了 1
共有 N 个节点，i, j 两个节点距离不变，因此有 {N - 2 - count[j]}N−2−count[j] 个节点距离增加了 1
可得 {dp[j]=dp[i]+(N-2-count[j])-count[j]}dp[j]=dp[i]+(N−2−count[j])−count[j]
转移过程的时间复杂度为 {O(1)}O(1)，遍历所有节点需要 {O(n)}O(n)，因此总时间复杂度为 {O(n)}O(n)

 * 
 
根据 edges 初始化无向图 graph
以节点 0 作为根节点，计算各个节点子孙节点的数量
以节点 0 作为根节点，计算出距离之和 dp[0]，可与步骤 2 合并为 1 次 dfs
从节点 0 开始，遍历所有节点，计算出其他节点的对应解 dp[i]
两次 dfs 时间复杂度均为 {O(n)}O(n)，因此总时间复杂度为 {O(n)}O(n)
 */
export function sumOfDistancesInTree(N: number, edges: number[][]) {
  const graph: number[][] = new Array(N).fill(null).map(() => []);
  const childrenCounts = new Array(N);
  const dp = new Array(N);

  // 初始化图
  edges.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  // 第一次 dfs，计算子孙节点数及 dp[0]
  function calcChildrens(index: number, deep: number): number {
    // 跳过已经遍历过的节点，偷懒直接用 dp 数组标记了   graph是无向图，会互相记录彼此，所以可能重复计算
    if (dp[index] !== undefined) return 0;
    dp[index] = 0;
    // 深度即距离，累加到 dp[0]中
    dp[0] += deep++;
    const childrens: number[] = graph[index];
    // 计算子孙节点的总数
    return (childrenCounts[index] = childrens.reduce(
      (count, currentValue) => count + calcChildrens(currentValue, deep),
      0,
    )) + 1;
  }
  calcChildrens(0, 0);

  const points = N - 2;
  function calcSum(from: number, curr: number) {
    // 跳过已经遍历过的节点，偷懒直接用 dp 数组标记了
    if (dp[curr]) return;
    // 从节点 from 转移到节点 curr，计算对应值 dp[curr]
    dp[curr] = dp[from] + points - childrenCounts[curr] * 2;
    // 从节点 curr 转移到各个子节点 to
    graph[curr].forEach((to) => calcSum(curr, to));
  }

  // // 从节点 0 开始，转移到各个子节点
  graph[0].forEach((to) => calcSum(0, to));

  return dp;
}
