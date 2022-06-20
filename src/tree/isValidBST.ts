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


const helper = (root: TreeNode | null, lower: number, upper: number): boolean => {
  if (root === null) {
      return true;
  }
  if (root.val <= lower || root.val >= upper) {
      return false;
  }
  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
export function isValidBST(root: TreeNode) {
  return helper(root, -Infinity, Infinity);
}

const swap = (x: TreeNode, y: TreeNode) => {
  const temp = x.val;
  x.val = y.val;
  y.val = temp;
}

export function recoverTree (root: TreeNode | null) {
  const stack = [];
  let x = null, y = null, pred = null;

  let current = root
  while (stack.length || root !== null) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop() as TreeNode;
    if (pred !== null && current.val < pred.val) {
      y = current;
      if (x === null) {
          x = pred;
      }
      else break;
    }
    pred = current;
    current = current.right;
  }
  swap(x as TreeNode, y as TreeNode);
}
