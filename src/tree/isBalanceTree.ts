export class Node {
  left: Node | null = null;
  right: Node | null = null;
  value: any;

  constructor(v: any) {
    this.value = v;
  }
}

export const isBalanceTree = (root: Node) => {
  if (!root) return true;

  let ret = true;
  height(root);

  return ret;

  function height(node: Node | null): number{
    if(!ret) return 0;
    if (!node) return 0;
  
    const lh = height(node.left);
    const rh = height(node.right);
  
    if (Math.abs(lh - rh) > 1) {
      ret = false
    }
  
    return Math.max(height(node.left), height(node.right)) + 1;
  }
}
