import { expect } from 'chai';
import 'mocha';
import { SinglyLinkedList, SNode } from './SinglyLinkedList'
import { combineSortedLists } from './combineSortedLists'

describe('SinglyLinkedList test', () => {

  it('SinglyLinkedList insert, remove, find, reverseList, checkCircle test', () => {

    const LList = new SinglyLinkedList()
    LList.insert('chen', 'head')
    expect(LList.snapshot()).to.equal('head,chen,')

    LList.insert('curry', 'chen')
    LList.insert('sang', 'head')
    LList.insert('zhao', 'head')
    expect(LList.snapshot()).to.equal('head,zhao,sang,chen,curry,')

    LList.remove('curry')
    expect(LList.snapshot()).to.equal('head,zhao,sang,chen,')

    const chen = LList.findByValue('chen') as SNode
    expect(chen.element).to.equal('chen')

    const snode2 = LList.findByIndex(2) as SNode
    expect(snode2.element).to.equal('sang')

    LList.reverseList()
    expect(LList.snapshot()).to.equal('head,chen,sang,zhao,')

    expect(LList.checkCircle()).to.equal(false)
  })

  it('combineSortedLists test', () => {
    const sortedList1 = new SinglyLinkedList()
    sortedList1.insert(9, 'head')
    sortedList1.insert(8, 'head')
    sortedList1.insert(7, 'head')
    sortedList1.insert(6, 'head')
    const sortedList2 = new SinglyLinkedList()
    sortedList2.insert(21, 'head')
    sortedList2.insert(20, 'head')
    sortedList2.insert(19, 'head')
    sortedList2.insert(18, 'head')
    let sortedList = combineSortedLists(sortedList1, sortedList2)

    let str = ''
    while (sortedList !== null) {
        str += `${sortedList.element},`
        sortedList = sortedList.next
    }
    expect(str).to.equal('6,7,8,9,18,19,20,21,')
  })
});
