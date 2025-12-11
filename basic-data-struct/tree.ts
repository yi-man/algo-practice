// 基本的二叉树节点
class TreeNode {
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

// 二叉树的递归遍历框架
export const dfsTraverse = (root: TreeNode | null) => {
  if (root === null) {
    return;
  }
  // 前序位置
  dfsTraverse(root.left);
  // 中序位置
  dfsTraverse(root.right);
  // 后序位置
};

const levelOrderTraverse = (root: TreeNode | null) => {
  if (root === null) {
    return;
  }
  const q: TreeNode[] = [];
  q.push(root);
  while (q.length !== 0) {
    const cur = q.shift();
    // 访问 cur 节点
    console.log(cur?.val ?? null);

    // 把 cur 的左右子节点加入队列
    if (cur?.left !== null) {
      q.push(cur?.left as TreeNode);
    }
    if (cur?.right !== null) {
      q.push(cur?.right as TreeNode);
    }
  }
};

const levelOrderTraverse2 = (root: TreeNode | null) => {
  if (root === null) {
    return;
  }
  const q: TreeNode[] = [];
  q.push(root);
  // 记录当前遍历到的层数（根节点视为第 1 层）
  let depth = 1;

  while (q.length !== 0) {
    const sz = q.length;
    for (let i = 0; i < sz; i++) {
      const cur = q.shift() as TreeNode;
      // 访问 cur 节点，同时知道它所在的层数
      console.log("depth = " + depth + ", val = " + cur.val);

      // 把 cur 的左右子节点加入队列
      if (cur.left !== null) {
        q.push(cur.left);
      }
      if (cur.right !== null) {
        q.push(cur.right);
      }
    }
    depth++;
  }
};

class State {
  node: TreeNode;
  depth: number;
  constructor(node: TreeNode, depth: number) {
    this.node = node;
    this.depth = depth;
  }
}

const levelOrderTraverse3 = (root: TreeNode | null) => {
  if (root === null) {
    return;
  }
  const q: State[] = [];
  // 根节点的路径权重和是 1
  q.push(new State(root, 1));

  while (q.length !== 0) {
    const cur = q.shift() as State;
    // 访问 cur 节点，同时知道它的路径权重和
    console.log("depth = " + cur.depth + ", val = " + cur.node.val);

    // 把 cur 的左右子节点加入队列
    if (cur.node.left !== null) {
      q.push(new State(cur.node.left, cur.depth + 1));
    }
    if (cur.node.right !== null) {
      q.push(new State(cur.node.right, cur.depth + 1));
    }
  }
};
