/**
 * 95. 不同的二叉搜索树 II
 * 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。
 */

import { Node } from './node'
// type Node = number | null
type NodeOrNull = Node | null

export const findAllBST = (n: number) => {
  const build = (l: number, h: number) => {
    const res: NodeOrNull[] = []
    if(l > h) {
      res.push(null)

      return res
    }

    for(let i = l; i<=h; i++) {
      const root = i;

      const left = build(l, root - 1)
      const right = build(root + 1, h)
      
      for(const l of left) {
        for(const r of right) {
          const rootNode = new Node(root)
          rootNode.left = l;
          rootNode.right = r;
          res.push(rootNode)
        }
      }
    }

    return res
  }

  const treeNodes = build(1, n);

  const result: (null | number)[][] = []
  for(const treeNode of treeNodes) {
    if(treeNode) {
      result.push(treeNode.toArray())
    }
  }
  return result
}



/**
 * 96. 不同的二叉搜索树
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 */

 export const getAllBSTCount = (n: number) => {
  const memo: number[][] = (new Array(n + 1)).fill(new Array(n+1).fill(0))

  console.log(memo)
  const count = (l: number, h: number) => {
    if (l > h) return 1;

    if (memo[l][h] != 0) {
      return memo[l][h];
    }

    let res = 0
    for(let i = l; i<=h; i++) {
      const root = i;

      const left = count(l, root - 1)
      const right = count(root + 1, h)
      
      res += left * right
    }

    memo[l][h] = res;

    return res
  }

  const result = count(1, n);

  return result
}