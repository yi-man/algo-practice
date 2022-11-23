type Element = number | null

export class Node{
  data: number
  left?: Node | null
  right?: Node | null

  constructor(data: number) {
    this.data = data
  }

  toArray() {
    const output: Element[] = []
    const ret: (Node | undefined | null)[] = []
    ret.push(this)

    while(ret.length > 0) {
      const node = ret.shift()

      if(node?.data) {
        output.push(node?.data)

        ret.push(node?.left)
        ret.push(node?.right)
      } else {
        output.push(null)
      }
    }

    let index = output.length - 1
    let item = output[index]
    while(item === null) {
      index--
      item = output[index]
    }

    return output.slice(0, index + 1)
  }
}

export class MultipleNode{
  data: number
  children: MultipleNode[] = []

  constructor(data: number) {
    this.data = data
  }
}