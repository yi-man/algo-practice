import { Node, MultipleNode } from "./node";

abstract class Search<T>{
  record: unknown[] = []

  abstract run(root?: T): void
}

export class DeepFirstSearch extends Search<MultipleNode> {
  constructor(){
    super()
  }

  run(root?: MultipleNode) {
    if(!root) return null;

    this.record.push(root.data)

    if(root.children.length === 0) return null;

    for(let i = 0; i < root.children.length; i++) {
      this.run(root.children[i])
    }
  }
}

export class BreadthFirstSearch extends Search<MultipleNode> {
  constructor(){
    super()
  }

  run(root?: MultipleNode) {
    if(!root) return null;

    const nodes: MultipleNode[] = [root]

    while(nodes.length > 0) {
      const node = nodes.shift() as MultipleNode

      this.record.push(node.data)

      node.children.forEach(child => {
        nodes.push(child)
      })
    }
  }
}

export class PreOrderTraversal extends Search<Node> {
  constructor(){
    super()
  }

  run(root?: Node) {
    if(!root) return null;

    this.record.push(root.data)

    this.run(root.left)
    this.run(root.right)
  }
}

export class InOrderTraversal extends Search<Node> {
  constructor(){
    super()
  }

  run(root?: Node) {
    if(!root) return null;

    this.run(root.left)
    this.record.push(root.data)
    this.run(root.right)
  }
}

export class PostOrderTraversal extends Search<Node> {
  constructor(){
    super()
  }

  run(root?: Node) {
    if(!root) return null;

    this.run(root.left)
    this.run(root.right)
    this.record.push(root.data)
  }
}
