import { expect } from 'chai';
import 'mocha';
import { mergeKLists, ListNode } from './mergeKLists'

describe('mergeKLists test', () => {

  it('mergeKLists test', () => {
    const list1 = new ListNode(1)
    list1.next = new ListNode(4)
    list1.next.next = new ListNode(5)

    const list2 = new ListNode(1)
    list2.next = new ListNode(3)
    list2.next.next = new ListNode(4)

    const list3 = new ListNode(2)
    list3.next = new ListNode(6)

    const  lists = [list1,list2,list3]

    let head = mergeKLists(lists)

    const result = []
    while(head !== null) {
      result.push(head.val)
      head = head.next
    }
  
    expect(result).to.deep.equal([1,1,2,3,4,4,5,6])
  })
});
