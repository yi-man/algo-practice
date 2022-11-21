/**
 * a -> b,c,d
 * b -> e, f
 * c -> e
 * d -> g
 * f -> h
 * 
 * w -> x, y
 * x -> z 
 */

export class Node{
  value: number
  deps: Array<Node> = []

  constructor(value: number) {
    this.value = value
  }

  addDeps(dep: Node){
    this.deps.push(dep)
  }
}

export const topology = (nodes: Array<Node>)=>{
  const queen: Array<Node> = []
  const result: number[] = []

  const inDegree = new Map<Node, number>(); 
  // 统计每个顶点的入度 
  for (let i = 0; i < nodes.length; i++) { 
    const node = nodes[i]
    for (let j = 0; j < node.deps.length; j++) { 
      const dep = node.deps[j]; 

      inDegree.set(dep, (inDegree.get(dep) || 0) + 1);
    } 
  }

  for (let i = 0; i < nodes.length; i++) { 
    const node = nodes[i]

    if(inDegree.get(node) === undefined){
      queen.push(node)
    }
  }

  while(queen.length > 0) {
    const node = queen.shift() as Node

    for (let i = 0; i < node.deps.length; i++) {
      const dep = node.deps[i]; 

      if(inDegree.get(dep) as number > 0){
        const newDegree = inDegree.get(dep) as number - 1
        inDegree.set(dep, newDegree);
  
        if(newDegree === 0) {
          queen.push(dep)
        }
      }
    }

    result.push(node.value)
  }

  return result
}