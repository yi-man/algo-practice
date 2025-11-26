/**
 给你一个整数 c，表示 c 个电站，每个电站有一个唯一标识符 id，从 1 到 c 编号。

这些电站通过 n 条 双向 电缆互相连接，表示为一个二维数组 connections，其中每个元素 connections[i] = [ui, vi] 表示电站 ui 和电站 vi 之间的连接。直接或间接连接的电站组成了一个 电网 。

最初，所有 电站均处于在线（正常运行）状态。

另给你一个二维数组 queries，其中每个查询属于以下 两种类型之一 ：

[1, x]：请求对电站 x 进行维护检查。如果电站 x 在线，则它自行解决检查。如果电站 x 已离线，则检查由与 x 同一 电网 中 编号最小 的在线电站解决。如果该电网中 不存在 任何 在线 电站，则返回 -1。

[2, x]：电站 x 离线（即变为非运行状态）。

返回一个整数数组，表示按照查询中出现的顺序，所有类型为 [1, x] 的查询结果。

注意：电网的结构是固定的；离线（非运行）的节点仍然属于其所在的电网，且离线操作不会改变电网的连接性。

 
 */

function processQueries(
  c: number,
  connections: number[][],
  queries: number[][]
): number[] {
  // 1. 构建邻接表表示图
  const graph: number[][] = new Array(c + 1).fill(null).map(() => []);

  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
  }

  // 2. 使用 DFS 标记连通分量
  const componentId: number[] = new Array(c + 1).fill(-1);
  const componentNodes = new Map<number, Set<number>>(); // Map<componentId, Set<节点>>

  let currentComponentId = 0;

  // DFS 遍历所有节点，标记连通分量
  const dfs = (node: number, compId: number): void => {
    if (componentId[node] !== -1) {
      return; // 已经访问过
    }

    componentId[node] = compId;

    // 将节点加入对应的连通分量集合
    if (!componentNodes.has(compId)) {
      componentNodes.set(compId, new Set());
    }
    componentNodes.get(compId)!.add(node);

    // 遍历所有邻居节点
    for (const neighbor of graph[node]) {
      dfs(neighbor, compId);
    }
  };

  // 遍历所有节点，找出所有连通分量
  for (let i = 1; i <= c; i++) {
    if (componentId[i] === -1) {
      dfs(i, currentComponentId);
      currentComponentId++;
    }
  }

  // 3. 维护每个节点的在线状态
  const online: boolean[] = new Array(c + 1).fill(true);

  // 4. 辅助函数：获取连通分量中的最小在线节点
  const getMinOnlineNode = (compId: number): number => {
    const nodes = componentNodes.get(compId);
    if (!nodes) return -1;

    let minNode = Infinity;
    for (const node of nodes) {
      if (online[node] && node < minNode) {
        minNode = node;
      }
    }

    return minNode === Infinity ? -1 : minNode;
  };

  // 5. 处理查询
  const result: number[] = [];

  for (const query of queries) {
    const [type, x] = query;

    if (type === 1) {
      // 查询操作
      if (online[x]) {
        // 如果 x 在线，返回 x
        result.push(x);
      } else {
        // 如果 x 离线，找到同一电网中编号最小的在线电站
        const compId = componentId[x];
        result.push(getMinOnlineNode(compId));
      }
    } else if (type === 2) {
      // 离线操作：将电站 x 设为离线
      online[x] = false;
    }
  }

  return result;
}
