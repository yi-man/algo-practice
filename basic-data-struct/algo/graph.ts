const buildGraph = function (numCourses: number, prerequisites: number[][]) {
  // 图中共有 numCourses 个节点
  const graph = new Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  for (let j = 0; j < prerequisites.length; j++) {
    const edge = prerequisites[j];
    const from = edge[1],
      to = edge[0];
    // 添加一条从 from 指向 to 的有向边
    // 边的方向是「被依赖」关系，即修完课程 from 才能修课程 to
    graph[from].push(to);
  }
  return graph;
};

// 环检测  dfs
const canFinish = function (numCourses: number, prerequisites: number[][]) {
  // 记录一次递归堆栈中的节点
  const onPath = new Array(numCourses);
  // 记录节点是否被遍历过
  const visited = new Array(numCourses);
  // 记录图中是否有环
  let hasCycle = false;

  const graph = buildGraph(numCourses, prerequisites);

  const traverse = function (graph: number[][], s: number) {
    if (hasCycle) {
      // 如果已经找到了环，也不用再遍历了
      return;
    }

    if (onPath[s]) {
      // s 已经在递归路径上，说明成环了
      hasCycle = true;
      return;
    }

    if (visited[s]) {
      // 不用再重复遍历已遍历过的节点
      return;
    }

    // 前序代码位置
    visited[s] = true;
    onPath[s] = true;
    for (const t of graph[s]) {
      traverse(graph, t);
    }
    // 后序代码位置
    onPath[s] = false;
  };

  for (let i = 0; i < numCourses; i++) {
    // 遍历图中的所有节点
    traverse(graph, i);
  }
  // 只要没有循环依赖可以完成所有课程
  return !hasCycle;
};

const canFinishBFS = function (numCourses: number, prerequisites: number[][]) {
  // 建图，有向边代表「被依赖」关系
  const graph = buildGraph(numCourses, prerequisites);
  // 构建入度数组
  const indegree = new Array(numCourses).fill(0);
  for (const edge of prerequisites) {
    const to = edge[0];
    // 节点 to 的入度加一
    indegree[to]++;
  }

  // 根据入度初始化队列中的节点
  const q: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      // 节点 i 没有入度，即没有依赖的节点
      // 可以作为拓扑排序的起点，加入队列
      q.push(i);
    }
  }

  // 记录遍历的节点个数
  let count = 0;
  // 开始执行 BFS 循环
  while (q.length) {
    // 弹出节点 cur，并将它指向的节点的入度减一
    const cur = q.shift();
    count++;
    for (const next of graph[cur as number]) {
      indegree[next]--;
      if (indegree[next] === 0) {
        // 如果入度变为 0，说明 next 依赖的节点都已被遍历
        q.push(next);
      }
    }
  }

  // 如果所有节点都被遍历过，说明不成环
  return count === numCourses;
};

// 拓扑排序  dfs   后序遍历，然后reverse得到拓扑排序结果
const findOrder = function (numCourses: number, prerequisites: number[][]) {
  // 记录后序遍历结果
  const postorder: number[] = [];
  // 记录是否存在环
  let hasCycle = false;
  const visited = new Array(numCourses);
  const onPath = new Array(numCourses);

  const graph = buildGraph(numCourses, prerequisites);

  const traverse = function (graph: number[][], s: number) {
    if (onPath[s]) {
      // 发现环
      hasCycle = true;
    }
    if (visited[s] || hasCycle) {
      return;
    }
    // 前序遍历位置
    onPath[s] = true;
    visited[s] = true;
    for (const t of graph[s]) {
      traverse(graph, t);
    }
    // 后序遍历位置
    postorder.push(s);
    onPath[s] = false;
  };

  for (let i = 0; i < numCourses; i++) {
    // 遍历图
    traverse(graph, i);
  }
  // 有环图无法进行拓扑排序
  if (hasCycle) {
    return [];
  }
  // 逆后序遍历结果即为拓扑排序结果
  postorder.reverse();
  return postorder;
};

const findOrderBFS = function (numCourses: number, prerequisites: number[][]) {
  // 建图，和环检测算法相同
  const graph = buildGraph(numCourses, prerequisites);
  // 计算入度，和环检测算法相同
  const indegree = new Array(numCourses).fill(0);
  for (const edge of prerequisites) {
    const from = edge[1],
      to = edge[0];
    indegree[to]++;
  }

  // 根据入度初始化队列中的节点，和环检测算法相同
  const q: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] == 0) {
      q.push(i);
    }
  }

  // 记录拓扑排序结果
  const res = new Array(numCourses).fill(0);
  // 记录遍历节点的顺序（索引）
  let count = 0;
  // 开始执行 BFS 算法
  while (q.length !== 0) {
    const cur = q.shift();
    // 弹出节点的顺序即为拓扑排序结果
    res[count] = cur;
    count++;
    for (const next of graph[cur as number]) {
      indegree[next]--;
      if (indegree[next] == 0) {
        q.push(next);
      }
    }
  }

  if (count != numCourses) {
    // 存在环，拓扑排序不存在
    return [];
  }

  return res;
};

// 二分图
const isBipartite = function (graph: number[][]) {
  // 记录图是否符合二分图性质
  let ok = true;
  // 记录图中节点的颜色，false 和 true 代表两种不同颜色
  const color = new Array(graph.length).fill(false);
  // 记录图中节点是否被访问过
  const visited = new Array(graph.length).fill(false);

  // DFS 遍历框架
  const traverse = function (graph: number[][], v: number) {
    // 如果已经确定不是二分图了，就不用浪费时间再递归遍历了
    if (!ok) return;

    visited[v] = true;
    for (const w of graph[v]) {
      if (!visited[w]) {
        // 相邻节点 w 没有被访问过
        // 那么应该给节点 w 涂上和节点 v 不同的颜色
        color[w] = !color[v];
        // 继续遍历 w
        traverse(graph, w);
      } else {
        // 相邻节点 w 已经被访问过
        // 根据 v 和 w 的颜色判断是否是二分图
        if (color[w] === color[v]) {
          // 若相同，则此图不是二分图
          ok = false;
        }
      }
    }
  };

  // 主函数，输入邻接表，判断是否是二分图
  const n = graph.length;
  // 因为图不一定是联通的，可能存在多个子图
  // 所以要把每个节点都作为起点进行一次遍历
  // 如果发现任何一个子图不是二分图，整幅图都不算二分图
  for (let v = 0; v < n; v++) {
    if (!visited[v]) {
      traverse(graph, v);
    }
  }

  return ok;
};
