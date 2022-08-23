import { expect } from 'chai'
import 'mocha';

import { Node, toplogy } from './index'

describe('toplogy test', () => {
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)
  const node4 = new Node(4)
  const node5 = new Node(5)
  const node6 = new Node(6)
  const node7 = new Node(7)
  const node8 = new Node(8)

  node1.addDeps(node2)
  node1.addDeps(node3)
  node2.addDeps(node4)
  node2.addDeps(node5)
  node2.addDeps(node3)
  node6.addDeps(node7)
  node6.addDeps(node8)
  node6.addDeps(node4)
  
  it('toplogy function test', () => {
    expect(
      toplogy([node1, node2, node3, node4, node5, node6, node7, node8])
    ).to.deep.equal(
      [
        1,
        6,
        2,
        7,
        8,
        4,
        5,
        3
      ]
    )
  })
})