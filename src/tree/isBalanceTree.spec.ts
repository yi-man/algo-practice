import { expect } from 'chai'
import 'mocha';

import { Node, isBalanceTree } from './isBalanceTree'

describe('test if this tree is balance', () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  const node6 = new Node(6);
  const node7 = new Node(7);
  const node8 = new Node(8);
  const node9 = new Node(9);

  node1.left = node2;
  node1.right = node3;
  node2.left = node4;
  node2.right = node5;
  node3.left = node6;
  node3.right = node7;

  it('function isBalanceTree return true', () => {
    expect(isBalanceTree(node1)).to.equal(true);

  })

  it('function isBalanceTree, isBalanceTree2 return false', () => {
    node4.left = node8;
    node8.left = node9;

    expect(isBalanceTree(node1)).to.equal(false);


  })

})