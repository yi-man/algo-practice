const buildGraph = (numCourses: number, prerequisites: Array<[number, number]>) => {
  // 图中共有 numCourses 个节点
  const graph: number[][] = [];
  for (let i = 0; i < numCourses; i++) {
      graph[i] = [];
  }

  for(const edge of prerequisites) {
    const from = edge[1];
    const to = edge[0];
    // 添加一条从 from 指向 to 的有向边
    // 边的方向是「被依赖」关系，即修完课程 from 才能修课程 to
    graph[from].push(to);
  }
  
  return graph;
}

// https://leetcode.cn/problems/course-schedule/submissions/
export function canArrange(numCourses: number, prerequisites: Array<[number, number]>) {
  // 防止重复遍历同一个节点
  let visited:boolean[] = [];
  const onPath:boolean[] = [];
  let hasCycle = false;

  // 从节点 s 开始 DFS 遍历，将遍历过的节点标记为 true
  function traverse(graph: number[][],  s: number) {
      if (onPath[s]) {
        // 发现环！！！
        hasCycle = true;
      }
      if (visited[s]  || hasCycle) {
          return;
      }
      /* 前序遍历代码位置 */
      // 将当前节点标记为已遍历
      visited[s] = true;
       // 开始遍历节点 s
      onPath[s] = true;
      for (const t of graph[s]) {
          traverse(graph, t);
      }
      /* 后序遍历代码位置 */
      // 节点 s 遍历完成
      onPath[s] = false;
  }


  function canFinish() {
      const  graph = buildGraph(numCourses, prerequisites);
      
      visited = new Array(numCourses);
      for (let i = 0; i < numCourses; i++) {
          traverse(graph, i);
      }
  }

  canFinish()

  return !hasCycle;
}


export function findOrder(numCourses: number, prerequisites: Array<[number, number]>) {
  // 防止重复遍历同一个节点
  let visited:boolean[] = [];
  const onPath:boolean[] = [];
  let hasCycle = false;

  // 记录后序遍历结果
  const postorder = new Array<number>();

  // 从节点 s 开始 DFS 遍历，将遍历过的节点标记为 true
  function traverse(graph: number[][],  s: number) {
      if (onPath[s]) {
        // 发现环！！！
        hasCycle = true;
     }
      if (visited[s]  || hasCycle) {
          return;
      }
      /* 前序遍历代码位置 */
      // 将当前节点标记为已遍历
      visited[s] = true;
       // 开始遍历节点 s
      onPath[s] = true;
      for (const t of graph[s]) {
          traverse(graph, t);
      }
      /* 后序遍历代码位置 */
      // 节点 s 遍历完成
      onPath[s] = false;

      postorder.push(s)
  }


  function canFinish() {
    const  graph = buildGraph(numCourses, prerequisites);
    
    visited = new Array(numCourses);
    for (let i = 0; i < numCourses; i++) {
        traverse(graph, i);
    }

    // 有环图无法进行拓扑排序
    if (hasCycle) {
      return [];
    }
    // 逆后序遍历结果即为拓扑排序结果
    postorder.reverse();
    const res = new Array<number>(numCourses);
    for (let i = 0; i < numCourses; i++) {
        res[i] = postorder[i];
    }
    return res;
  }

  return canFinish()
}
