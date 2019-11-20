import { SinglyLinkedList, SNode } from './SinglyLinkedList'

export const combineSortedLists = (listA: SinglyLinkedList, listB: SinglyLinkedList) => {
  let a: null | SNode = listA.head.next
  let b: null | SNode = listB.head.next

  if (!a) {
    return b
  }
  if (!b) {
    return a
  }

  let resultList = undefined

  if (a.element < b.element) {
    resultList = a
    a = a.next
  } else {
    resultList = b
    b = b.next
  }

  let currentNode = resultList
  while (a !== null && b !== null) {
      if (a.element < b.element) {
          currentNode.next = a
          a = a.next
      } else {
          currentNode.next = b
          b = b.next
      }
      currentNode = currentNode.next
  }

  if (a != null) {
      currentNode.next = a
  } else {
      currentNode.next = b
  }
  return resultList
}