export class Node{
  data: number
  left?: Node
  right?: Node

  constructor(data: number) {
    this.data = data
  }
}

export class MultipleNode{
  data: number
  children: MultipleNode[] = []

  constructor(data: number) {
    this.data = data
  }
}