export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

export function mergeKLists(lists: Array<ListNode | null>) {
  const valuObject: {[k: string]: Array<ListNode>} = {}

  // 将所有链表的值放入一个对象中
  lists.forEach((list) => {
    while(list !== null) {
      if(valuObject[list.val]) {
        valuObject[list.val].push(list)
      } else {
        valuObject[list.val] = [list]
      }

      list = list.next
    }
  })

  // 排序索引
  const sorted = Object.keys(valuObject).sort((a, b) => Number(a) - Number(b))

  let current: ListNode | null = null
  let head: ListNode | null = null
  
  // 按数值大小拼接链表
  sorted.forEach((k) => {
    valuObject[k].forEach((node) => {
      if(current === null) {
        current = node
        head = node
      } else {
        current.next = node
        current = current.next
      }
    })
  })

  return (head as unknown) as ListNode | null
}
