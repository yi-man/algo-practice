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


