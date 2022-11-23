export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
}

export const recoverTree = (root: TreeNode) => {
  let prev = new TreeNode(-Infinity)
  let first: TreeNode|null = null
  let second: TreeNode|null = null

  const inOrderTraverse = (node: TreeNode | null) => {
    if(node === null) {
      return ;
    }

    inOrderTraverse(node.left)

    // 中序遍历代码位置，找出那两个节点
    if (node.val < prev.val) {
      // node 不符合有序性
      if (first == null) {
          // 第一个错位节点是 prev
          first = prev;
      }
      // 第二个错位节点是 root
      second = node;
    }
    prev = node;

    inOrderTraverse(node.right)
  }

  inOrderTraverse(root)

  const f = first as unknown as TreeNode
  const s = second as unknown as TreeNode
  const temp = f.val;
  f.val = s.val;
  s.val = temp;
}