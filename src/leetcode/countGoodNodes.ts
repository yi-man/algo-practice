function countGoodNodes(edges: number[][]): number {
  interface Node {
    value: number;
    children: Node[];
    // 子节点的个数
    childCount: number;
  }

  // 根节点
  const root: Node = {
    value: 0,
    children: [],
    childCount: 0,
  };

  // 节点map
  const nodeMap: Record<number, Node> = {
    0: root,
  };

  // 构建节点
  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];

    if (!nodeMap[from]) {
      nodeMap[from] = {
        value: from,
        children: [],
        childCount: 0,
      };
    }

    if (!nodeMap[to]) {
      nodeMap[to] = {
        value: to,
        children: [],
        childCount: 0,
      };
    }

    nodeMap[from].children.push(nodeMap[to]);
    nodeMap[to].children.push(nodeMap[from]);
  }

  let goodNodes = 0;

  // 从 root 开始遍历, 计算子节点个数
  const dfs = (node: Node, parent?: Node): number => {
    if (node.children.length === 0) {
      goodNodes++;
      return 1;
    }

    let count = 0;
    let tmpCount = -1;
    let isSame = true;
    for (let i = 0; i < node.children.length; i++) {
      if (node.children[i] === parent) {
        continue;
      }
      count += dfs(node.children[i], node);

      if (tmpCount === -1) {
        tmpCount = node.children[i].childCount;
      } else {
        if (tmpCount !== node.children[i].childCount) {
          isSame = false;
        }
      }
    }

    if (isSame) {
      goodNodes++;
    }
    node.childCount = count;

    return count + 1;
  };

  dfs(root);

  return goodNodes;
}

// 无向树，   from 和 to 不一定

console.log(
  countGoodNodes([
    [6, 0],
    [1, 0],
    [5, 1],
    [2, 5],
    [3, 1],
    [4, 3],
  ])
);
