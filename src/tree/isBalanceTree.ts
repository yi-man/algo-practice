export class Node {
  left: Node | null = null;
  right: Node | null = null;
  value: any;

  constructor(v: any) {
    this.value = v;
  }
}

export const isBalanceTree = (root: Node): boolean => {
  const { left, right } = root;
  if (left && right) {
    return isBalanceTree(left) && isBalanceTree(right);
  }

  if (!left && !right) {
    return true;
  }

  if (left && left.left && !left.right) {
    const node = left.left;

    if (node.left || node.right) {
      return true;
    }

    return false
  }

  if (right && right.right && !right.left) {
    const node = right.right;

    if (node.left || node.right) {
      return true;
    }

    return false
  }

  return false;
}


const height2 = (node: Node | null): number => {
  if (!node) return 0;

  return Math.max(height2(node.left), height2(node.right)) + 1;
}

export const isBalanceTree2 = (root: Node) => {

  const lh = height2(root.left);
  const rh = height2(root.right);

  console.log(lh, rh)
  return Math.abs(lh - rh) <= 1;
}