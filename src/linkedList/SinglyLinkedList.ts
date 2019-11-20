/**
 * @description 单向链表
 * TODO: 可添加 last指针，count计数属性， 使得操作更方便
 */

export class SNode {
  element: any
  next: null | SNode
  constructor (element: any) {
    this.element = element
    this.next = null
  }
}

export class SinglyLinkedList {
  head: SNode
  // last: SNode

  constructor() {
    this.head = new SNode('head')
    // this.last = this.head
  }

  // 根据value查找节点
  findByValue (item: any) {
    let currentNode: (null | SNode) = this.head

    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next
    }

    return currentNode === null ? -1 : currentNode
  } 

  // 根据index查找节点
  findByIndex (index: number) {
    let currentNode: null | SNode = this.head
    let pos = 0

    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }

    return currentNode === null ? -1 : currentNode
  } 

  /**
   * @description 指定元素后插入元素
   * @param newElement 插入的元素
   * @param element 指定的元素
   */
  insert (newElement: any, element: any) {
    const currentNode = this.findByValue(element)

    if (currentNode === -1) {
      console.log('未找到插入位置')
      return
    }
    const newNode = new SNode(newElement)
    newNode.next = currentNode.next
    currentNode.next = newNode
  } 

  // 查找前一个
  findPrev (item: any) {
    let currentNode = this.head

    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next
    }
    if (currentNode.next === null) {
      return -1
    }
    return currentNode
  }

  // 根据值删除
  remove (item: any) {
    const desNode = this.findByValue(item)

    if (desNode === -1) {
      console.log('未找到元素')
      return
    }

    const prevNode = this.findPrev(item) as SNode
    prevNode.next = desNode.next
  } 

  /**
   * @description 添加到末尾
   * @param node 
   */
  // append (node: SNode) {
  //   this.last.next = node
  // }

  /**
   * @description 添加到头部后面
   * @param node 
   */
  appendAfterHead (node: SNode) {
    node.next = this.head.next
    this.head.next = node
  }

  // 遍历显示所有节点
  display () {
    let currentNode: null | SNode = this.head
    while (currentNode !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
  }

  snapshot() {
    let currentNode: null | SNode = this.head
    let combined = ''
    while (currentNode !== null) {
      combined += `${currentNode.element},`
      currentNode = currentNode.next
    }
    return combined
  }

  // 尾插法 反转单链表
  reverseList() {
    const root = new SNode('head')
      let currentNode = this.head.next
      while (currentNode !== null) {
          const next = currentNode.next
          currentNode.next = root.next
          root.next = currentNode
          currentNode = next
      }
      this.head = root
  }

  // 环验证, 快慢指针
  checkCircle() {
    let fast = this.head.next
    let slow = this.head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next as SNode
        if (slow === fast) return true
    }
    return false
  }

  // 删除倒数第k个节点
  removeByIndexFromEnd(index: number) {
    //务必先判断是否是 环链表
    if(this.checkCircle()) return false
    this.reverseList()

    let pos = 1
    let currentNode = this.head.next

    while (currentNode !== null && pos < index) {
        currentNode = currentNode.next
        pos++
    }

    if (currentNode === null) {
        console.log('无法删除最后一个节点或者该节点不存在')
        return false
    }

    this.remove(currentNode.element)
    this.reverseList()
  }

  // 求中间节点
  findMiddleNode() {
    let fast = this.head
    let slow = this.head
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next
        slow = slow.next as SNode
    }
    return slow
  }
}
