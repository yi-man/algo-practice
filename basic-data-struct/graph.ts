/* eslint-disable @typescript-eslint/no-non-null-assertion */
/** 有向加权图（邻接表实现） */
class DirectedWeightedGraphAdjList {
  private adjList: Map<number, Array<{ vertex: number; weight: number }>>;

  constructor() {
    this.adjList = new Map();
  }

  /** 添加顶点（若不存在） */
  addVertex(v: number): void {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
  }

  /** 添加有向边 u->v，带权值 */
  addEdge(u: number, v: number, weight: number): void {
    this.addVertex(u);
    this.addVertex(v);
    // 移除原有边（避免重复）
    const edges = this.adjList.get(u)!;
    const filteredEdges = edges.filter((edge) => edge.vertex !== v);
    filteredEdges.push({ vertex: v, weight });
    this.adjList.set(u, filteredEdges);
  }

  /** 删除有向边 u->v */
  removeEdge(u: number, v: number): void {
    if (this.adjList.has(u)) {
      const edges = this.adjList.get(u)!;
      const filteredEdges = edges.filter((edge) => edge.vertex !== v);
      this.adjList.set(u, filteredEdges);
    }
  }

  /** 打印邻接表结构 */
  printGraph(): void {
    console.log("有向加权图（邻接表）：");
    this.adjList.forEach((edges, vertex) => {
      const edgeStr = edges.map((e) => `(${e.vertex}, ${e.weight})`).join(", ");
      console.log(`${vertex}: [${edgeStr}]`);
    });
  }
}

// 测试有向加权图（邻接表）
const dwAdjList = new DirectedWeightedGraphAdjList();
dwAdjList.addEdge(0, 1, 5);
dwAdjList.addEdge(0, 2, 3);
dwAdjList.addEdge(1, 2, 2);
dwAdjList.addEdge(2, 0, 1);
dwAdjList.printGraph();

/** 有向加权图（邻接矩阵实现） */
class DirectedWeightedGraphAdjMatrix {
  private adjMatrix: number[][];
  private numVertices: number;
  private readonly INF: number = Infinity;

  constructor(numVertices: number = 0) {
    this.numVertices = numVertices;
    // 初始化邻接矩阵，无边为INF，自身到自身为0
    this.adjMatrix = Array.from({ length: numVertices }, (_, i) =>
      Array.from({ length: numVertices }, (_, j) => (i === j ? 0 : this.INF))
    );
  }

  /** 添加顶点（扩展矩阵） */
  addVertex(): void {
    this.numVertices++;
    // 扩展每行
    this.adjMatrix.forEach((row) => row.push(this.INF));
    // 添加新行
    const newRow = Array.from({ length: this.numVertices }, (_, i) =>
      i === this.numVertices - 1 ? 0 : this.INF
    );
    this.adjMatrix.push(newRow);
  }

  /** 添加有向边 u->v，带权值 */
  addEdge(u: number, v: number, weight: number): void {
    if (u >= 0 && u < this.numVertices && v >= 0 && v < this.numVertices) {
      this.adjMatrix[u][v] = weight;
    } else {
      throw new Error("顶点编号超出范围");
    }
  }

  /** 删除有向边 u->v */
  removeEdge(u: number, v: number): void {
    if (u >= 0 && u < this.numVertices && v >= 0 && v < this.numVertices) {
      this.adjMatrix[u][v] = this.INF;
    }
  }

  /** 打印邻接矩阵 */
  printGraph(): void {
    console.log("有向加权图（邻接矩阵）：");
    this.adjMatrix.forEach((row) => {
      const rowStr = row
        .map((val) => (val === this.INF ? "INF" : val))
        .join("\t");
      console.log(rowStr);
    });
  }
}

// 测试有向加权图（邻接矩阵）
const dwAdjMatrix = new DirectedWeightedGraphAdjMatrix(3);
dwAdjMatrix.addEdge(0, 1, 5);
dwAdjMatrix.addEdge(0, 2, 3);
dwAdjMatrix.addEdge(1, 2, 2);
dwAdjMatrix.addEdge(2, 0, 1);
dwAdjMatrix.printGraph();

/** 有向无权图（邻接表实现） */
class DirectedUnweightedGraphAdjList {
  private adjList: Map<number, number[]>;

  constructor() {
    this.adjList = new Map();
  }

  /** 添加顶点（若不存在） */
  addVertex(v: number): void {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
  }

  /** 添加有向边 u->v（无权） */
  addEdge(u: number, v: number): void {
    this.addVertex(u);
    this.addVertex(v);
    const edges = this.adjList.get(u)!;
    if (!edges.includes(v)) {
      edges.push(v);
    }
  }

  /** 删除有向边 u->v */
  removeEdge(u: number, v: number): void {
    if (this.adjList.has(u)) {
      const edges = this.adjList.get(u)!;
      const filteredEdges = edges.filter((vertex) => vertex !== v);
      this.adjList.set(u, filteredEdges);
    }
  }

  /** 打印邻接表结构 */
  printGraph(): void {
    console.log("有向无权图（邻接表）：");
    this.adjList.forEach((edges, vertex) => {
      console.log(`${vertex}: [${edges.join(", ")}]`);
    });
  }
}

// 测试有向无权图（邻接表）
const duAdjList = new DirectedUnweightedGraphAdjList();
duAdjList.addEdge(0, 1);
duAdjList.addEdge(0, 2);
duAdjList.addEdge(1, 2);
duAdjList.printGraph();

/** 有向无权图（邻接矩阵实现） */
class DirectedUnweightedGraphAdjMatrix {
  private adjMatrix: number[][];
  private numVertices: number;

  constructor(numVertices: number = 0) {
    this.numVertices = numVertices;
    // 初始化邻接矩阵，0表示无边
    this.adjMatrix = Array.from({ length: numVertices }, () =>
      Array.from({ length: numVertices }, () => 0)
    );
  }

  /** 添加顶点（扩展矩阵） */
  addVertex(): void {
    this.numVertices++;
    this.adjMatrix.forEach((row) => row.push(0));
    this.adjMatrix.push(Array.from({ length: this.numVertices }, () => 0));
  }

  /** 添加有向边 u->v */
  addEdge(u: number, v: number): void {
    if (u >= 0 && u < this.numVertices && v >= 0 && v < this.numVertices) {
      this.adjMatrix[u][v] = 1;
    } else {
      throw new Error("顶点编号超出范围");
    }
  }

  /** 删除有向边 u->v */
  removeEdge(u: number, v: number): void {
    if (u >= 0 && u < this.numVertices && v >= 0 && v < this.numVertices) {
      this.adjMatrix[u][v] = 0;
    }
  }

  /** 打印邻接矩阵 */
  printGraph(): void {
    console.log("有向无权图（邻接矩阵）：");
    this.adjMatrix.forEach((row) => {
      console.log(row.join("\t"));
    });
  }
}

// 测试有向无权图（邻接矩阵）
const duAdjMatrix = new DirectedUnweightedGraphAdjMatrix(3);
duAdjMatrix.addEdge(0, 1);
duAdjMatrix.addEdge(0, 2);
duAdjMatrix.addEdge(1, 2);
duAdjMatrix.printGraph();

/** 无向加权图（邻接表实现） */
class UndirectedWeightedGraphAdjList {
  private adjList: Map<number, Array<{ vertex: number; weight: number }>>;

  constructor() {
    this.adjList = new Map();
  }

  /** 添加顶点（若不存在） */
  addVertex(v: number): void {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
  }

  /** 添加无向边 u<->v，带权值 */
  addEdge(u: number, v: number, weight: number): void {
    this.addVertex(u);
    this.addVertex(v);
    // 处理u->v
    const uEdges = this.adjList.get(u)!;
    const filteredUEdges = uEdges.filter((edge) => edge.vertex !== v);
    filteredUEdges.push({ vertex: v, weight });
    this.adjList.set(u, filteredUEdges);

    // 处理v->u（无向边双向添加）
    const vEdges = this.adjList.get(v)!;
    const filteredVEdges = vEdges.filter((edge) => edge.vertex !== u);
    filteredVEdges.push({ vertex: u, weight });
    this.adjList.set(v, filteredVEdges);
  }

  /** 删除无向边 u<->v */
  removeEdge(u: number, v: number): void {
    // 移除u->v
    if (this.adjList.has(u)) {
      const uEdges = this.adjList.get(u)!;
      const filteredUEdges = uEdges.filter((edge) => edge.vertex !== v);
      this.adjList.set(u, filteredUEdges);
    }

    // 移除v->u
    if (this.adjList.has(v)) {
      const vEdges = this.adjList.get(v)!;
      const filteredVEdges = vEdges.filter((edge) => edge.vertex !== u);
      this.adjList.set(v, filteredVEdges);
    }
  }

  /** 打印邻接表结构 */
  printGraph(): void {
    console.log("无向加权图（邻接表）：");
    this.adjList.forEach((edges, vertex) => {
      const edgeStr = edges.map((e) => `(${e.vertex}, ${e.weight})`).join(", ");
      console.log(`${vertex}: [${edgeStr}]`);
    });
  }
}

// 测试无向加权图（邻接表）
const uwAdjList = new UndirectedWeightedGraphAdjList();
uwAdjList.addEdge(0, 1, 5);
uwAdjList.addEdge(0, 2, 3);
uwAdjList.addEdge(1, 2, 2);
uwAdjList.printGraph();

/** 无向加权图（邻接矩阵实现） */
class UndirectedWeightedGraphAdjMatrix {
  private adjMatrix: number[][];
  private numVertices: number;
  private readonly INF: number = Infinity;

  constructor(numVertices: number = 0) {
    this.numVertices = numVertices;
    this.adjMatrix = Array.from({ length: numVertices }, (_, i) =>
      Array.from({ length: numVertices }, (_, j) => (i === j ? 0 : this.INF))
    );
  }

  /** 添加顶点（扩展矩阵） */
  addVertex(): void {
    this.numVertices++;
    this.adjMatrix.forEach((row) => row.push(this.INF));
    const newRow = Array.from({ length: this.numVertices }, (_, i) =>
      i === this.numVertices - 1 ? 0 : this.INF
    );
    this.adjMatrix.push(newRow);
  }

  /** 添加无向边 u<->v，带权值 */
  addEdge(u: number, v: number, weight: number): void {
    if (u >= 0 && u < this.numVertices && v >= 0 && v < this.numVertices) {
      this.adjMatrix[u][v] = weight;
      this.adjMatrix[v][u] = weight; // 无向边双向赋值
    } else {
      throw new Error("顶点编号超出范围");
    }
  }

  /** 删除无向边 u<->v */
  removeEdge(u: number, v: number): void {
    if (u >= 0 && u < this.numVertices && v >= 0 && v < this.numVertices) {
      this.adjMatrix[u][v] = this.INF;
      this.adjMatrix[v][u] = this.INF;
    }
  }

  /** 打印邻接矩阵 */
  printGraph(): void {
    console.log("无向加权图（邻接矩阵）：");
    this.adjMatrix.forEach((row) => {
      const rowStr = row
        .map((val) => (val === this.INF ? "INF" : val))
        .join("\t");
      console.log(rowStr);
    });
  }
}

// 测试无向加权图（邻接矩阵）
const uwAdjMatrix = new UndirectedWeightedGraphAdjMatrix(3);
uwAdjMatrix.addEdge(0, 1, 5);
uwAdjMatrix.addEdge(0, 2, 3);
uwAdjMatrix.addEdge(1, 2, 2);
uwAdjMatrix.printGraph();

/** 无向无权图（邻接表实现） */
class UndirectedUnweightedGraphAdjList {
  private adjList: Map<number, number[]>;

  constructor() {
    this.adjList = new Map();
  }

  /** 添加顶点（若不存在） */
  addVertex(v: number): void {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
  }

  /** 添加无向边 u<->v */
  addEdge(u: number, v: number): void {
    this.addVertex(u);
    this.addVertex(v);

    // 处理u->v
    const uEdges = this.adjList.get(u)!;
    if (!uEdges.includes(v)) {
      uEdges.push(v);
    }

    // 处理v->u
    const vEdges = this.adjList.get(v)!;
    if (!vEdges.includes(u)) {
      vEdges.push(u);
    }
  }

  /** 删除无向边 u<->v */
  removeEdge(u: number, v: number): void {
    // 移除u->v
    if (this.adjList.has(u)) {
      const uEdges = this.adjList.get(u)!;
      const filteredUEdges = uEdges.filter((vertex) => vertex !== v);
      this.adjList.set(u, filteredUEdges);
    }

    // 移除v->u
    if (this.adjList.has(v)) {
      const vEdges = this.adjList.get(v)!;
      const filteredVEdges = vEdges.filter((vertex) => vertex !== u);
      this.adjList.set(v, filteredVEdges);
    }
  }

  /** 获取所有顶点 */
  getVertices(): number[] {
    return Array.from(this.adjList.keys());
  }

  /** 获取顶点的邻接顶点 */
  getNeighbors(v: number): number[] {
    return this.adjList.get(v) || [];
  }

  /** 打印邻接表结构 */
  printGraph(): void {
    console.log("无向无权图（邻接表）：");
    this.adjList.forEach((edges, vertex) => {
      console.log(`${vertex}: [${edges.join(", ")}]`);
    });
  }
}

// 测试无向无权图（邻接表）
const uuAdjList = new UndirectedUnweightedGraphAdjList();
uuAdjList.addEdge(0, 1);
uuAdjList.addEdge(0, 2);
uuAdjList.addEdge(1, 2);
uuAdjList.printGraph();

/** 无向无权图（邻接矩阵实现） */
class UndirectedUnweightedGraphAdjMatrix {
  private adjMatrix: number[][];
  private numVertices: number;

  constructor(numVertices: number = 0) {
    this.numVertices = numVertices;
    this.adjMatrix = Array.from({ length: numVertices }, () =>
      Array.from({ length: numVertices }, () => 0)
    );
  }

  /** 添加顶点（扩展矩阵） */
  addVertex(): void {
    this.numVertices++;
    this.adjMatrix.forEach((row) => row.push(0));
    this.adjMatrix.push(Array.from({ length: this.numVertices }, () => 0));
  }

  /** 添加无向边 u<->v */
  addEdge(u: number, v: number): void {
    if (u >= 0 && u < this.numVertices && v >= 0 && v < this.numVertices) {
      this.adjMatrix[u][v] = 1;
      this.adjMatrix[v][u] = 1; // 无向边双向赋值
    } else {
      throw new Error("顶点编号超出范围");
    }
  }

  /** 删除无向边 u<->v */
  removeEdge(u: number, v: number): void {
    if (u >= 0 && u < this.numVertices && v >= 0 && v < this.numVertices) {
      this.adjMatrix[u][v] = 0;
      this.adjMatrix[v][u] = 0;
    }
  }

  /** 打印邻接矩阵 */
  printGraph(): void {
    console.log("无向无权图（邻接矩阵）：");
    this.adjMatrix.forEach((row) => {
      console.log(row.join("\t"));
    });
  }
}

// 测试无向无权图（邻接矩阵）
const uuAdjMatrix = new UndirectedUnweightedGraphAdjMatrix(3);
uuAdjMatrix.addEdge(0, 1);
uuAdjMatrix.addEdge(0, 2);
uuAdjMatrix.addEdge(1, 2);
uuAdjMatrix.printGraph();

/** DFS - 遍历所有节点（visited数组） */
function dfsTraverseAllNodes(
  graph: UndirectedUnweightedGraphAdjList,
  start: number
): number[] {
  const visited = new Set<number>(); // 标记已访问的节点
  const result: number[] = [];

  const dfs = (v: number) => {
    if (visited.has(v)) return; // 已访问则跳过
    visited.add(v);
    result.push(v); // 记录访问节点
    // 遍历邻接节点
    for (const neighbor of graph.getNeighbors(v)) {
      dfs(neighbor);
    }
  };

  dfs(start);
  // 处理非连通图（若有未访问的节点，从该节点重新开始）
  for (const vertex of graph.getVertices()) {
    if (!visited.has(vertex)) {
      dfs(vertex);
    }
  }
  return result;
}

/** DFS - 遍历所有边（二维visited数组） */
function dfsTraverseAllEdges(
  graph: UndirectedUnweightedGraphAdjList,
  start: number
): string[] {
  const visitedEdges = new Set<string>(); // 用 "u-v"（u<v）标记边，避免无向边重复
  const result: string[] = []; // 存储所有边（格式："u-v"）

  const dfs = (v: number) => {
    for (const neighbor of graph.getNeighbors(v)) {
      // 统一边的表示形式（小值在前），避免 u-v 和 v-u 重复
      const edge = v < neighbor ? `${v}-${neighbor}` : `${neighbor}-${v}`;
      if (!visitedEdges.has(edge)) {
        visitedEdges.add(edge);
        result.push(edge); // 记录边
        dfs(neighbor); // 继续遍历邻接节点
      }
    }
  };

  dfs(start);
  // 处理非连通图
  for (const vertex of graph.getVertices()) {
    let hasUnvisitedEdge = false;
    for (const neighbor of graph.getNeighbors(vertex)) {
      const edge =
        vertex < neighbor ? `${vertex}-${neighbor}` : `${neighbor}-${vertex}`;
      if (!visitedEdges.has(edge)) {
        hasUnvisitedEdge = true;
        break;
      }
    }
    if (hasUnvisitedEdge) {
      dfs(vertex);
    }
  }
  return result;
}

/** DFS - 遍历所有路径（onPath数组） */
function dfsTraverseAllPaths(
  graph: UndirectedUnweightedGraphAdjList,
  start: number,
  end: number
): number[][] {
  const onPath: number[] = []; // 标记当前路径上的节点
  const result: number[][] = [];

  const dfs = (v: number) => {
    onPath.push(v); // 加入当前路径
    // 到达终点，记录路径
    if (v === end) {
      result.push([...onPath]); // 深拷贝路径
      onPath.pop(); // 回溯
      return;
    }
    // 遍历邻接节点
    for (const neighbor of graph.getNeighbors(v)) {
      if (!onPath.includes(neighbor)) {
        // 避免路径回环
        dfs(neighbor);
      }
    }
    onPath.pop(); // 回溯：移除当前节点
  };

  dfs(start);
  return result;
}

/** DFS - 同时使用visited和onPath数组 */
function dfsWithVisitedAndOnPath(
  graph: UndirectedUnweightedGraphAdjList,
  start: number,
  end: number
): number[][] {
  const visited = new Set<number>(); // 全局已访问节点（优化非连通图）
  const onPath: number[] = []; // 当前路径节点
  const result: number[][] = [];

  const dfs = (v: number) => {
    visited.add(v);
    onPath.push(v);

    if (v === end) {
      result.push([...onPath]);
      onPath.pop();
      return;
    }

    for (const neighbor of graph.getNeighbors(v)) {
      if (!visited.has(neighbor) && !onPath.includes(neighbor)) {
        dfs(neighbor);
      }
    }

    onPath.pop(); // 回溯
    // 注意：非路径遍历场景无需移除visited，路径遍历需移除（否则会影响其他路径）
    visited.delete(v);
  };

  dfs(start);
  // 处理非连通图中未访问的节点（若终点在其他连通分量）
  if (!visited.has(end)) {
    for (const vertex of graph.getVertices()) {
      if (!visited.has(vertex)) {
        dfs(vertex);
      }
    }
  }

  return result;
}

/** DFS - 完全不用visited和onPath数组（仅适用于无环图） */
function dfsWithoutAnyMark(
  graph: UndirectedUnweightedGraphAdjList,
  start: number,
  end: number,
  currentPath: number[] = [],
  result: number[][] = []
): number[][] {
  currentPath.push(start);

  if (start === end) {
    result.push([...currentPath]);
    currentPath.pop();
    return result;
  }

  // 遍历邻接节点（无环图无需判断，有环图会无限递归）
  for (const neighbor of graph.getNeighbors(start)) {
    // 无环图：邻接节点不会出现在当前路径中，无需判断
    dfsWithoutAnyMark(graph, neighbor, end, currentPath, result);
  }

  currentPath.pop();
  return result;
}

// 构建无环测试图（DAG：0-1-2-3）
const dagGraph = new UndirectedUnweightedGraphAdjList();
dagGraph.addEdge(0, 1);
dagGraph.addEdge(1, 2);
dagGraph.addEdge(2, 3);
console.log(
  "DFS完全不用visited/onPath（无环图）：",
  dfsWithoutAnyMark(dagGraph, 0, 3)
);
// 输出：[[0,1,2,3]]

/** BFS - 写法一：基础Array队列 */
function bfsStyle1(
  graph: UndirectedUnweightedGraphAdjList,
  start: number
): number[] {
  const visited = new Set<number>();
  const queue: number[] = [start]; // 初始化队列
  const result: number[] = [];

  visited.add(start);

  while (queue.length > 0) {
    const current = queue.shift()!; // 出队（Array.shift()时间复杂度O(n)，仅演示）
    result.push(current);

    // 遍历邻接节点
    for (const neighbor of graph.getNeighbors(current)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor); // 入队
      }
    }
  }

  // 处理非连通图
  for (const vertex of graph.getVertices()) {
    if (!visited.has(vertex)) {
      queue.push(vertex);
      visited.add(vertex);
      while (queue.length > 0) {
        const current = queue.shift()!;
        result.push(current);
        for (const neighbor of graph.getNeighbors(current)) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }

  return result;
}

/** BFS - 写法三：层级遍历（记录每层节点） */
function bfsStyle3(
  graph: UndirectedUnweightedGraphAdjList,
  start: number
): {
  result: number[];
  levels: number[][]; // 按层级存储节点
} {
  const visited = new Set<number>();
  const queue: number[] = [start];
  const result: number[] = [];
  const levels: number[][] = []; // 存储每一层的节点

  visited.add(start);

  while (queue.length > 0) {
    const levelSize = queue.length; // 当前层的节点数
    const currentLevel: number[] = [];

    // 遍历当前层所有节点
    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift()!;
      result.push(current);
      currentLevel.push(current);

      for (const neighbor of graph.getNeighbors(current)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    levels.push(currentLevel);
  }

  // 处理非连通图的层级
  for (const vertex of graph.getVertices()) {
    if (!visited.has(vertex)) {
      queue.push(vertex);
      visited.add(vertex);
      while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel: number[] = [];
        for (let i = 0; i < levelSize; i++) {
          const current = queue.shift()!;
          result.push(current);
          currentLevel.push(current);
          for (const neighbor of graph.getNeighbors(current)) {
            if (!visited.has(neighbor)) {
              visited.add(neighbor);
              queue.push(neighbor);
            }
          }
        }
        levels.push(currentLevel);
      }
    }
  }

  return { result, levels };
}
