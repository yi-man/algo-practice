import { expect } from 'chai'
import 'mocha';
import { MultipleNode, Node } from './node'
import {DeepFirstSearch, BreadthFirstSearch, PreOrderTraversal, PostOrderTraversal, InOrderTraversal} from './treeSearch'

describe('search test', () => {
  const root = new MultipleNode(1);
  const node2 = new MultipleNode(2);
  const node3 = new MultipleNode(3);
  const node4 = new MultipleNode(4);
  const node5 = new MultipleNode(5);
  const node6 = new MultipleNode(6);
  const node7 = new MultipleNode(7);
  const node8 = new MultipleNode(8);
  const node9 = new MultipleNode(9);
  const node10 = new MultipleNode(10);

  root.children = [node2, node3]
  node2.children = [node4, node5, node6]
  node3.children = [node7, node8]
  node4.children = [node9, node10]

  
  const binaryTree = new Node(11)
  const node12 = new Node(12)
  const node13 = new Node(13)
  const node14 = new Node(14)
  const node15 = new Node(15)
  const node16 = new Node(16)
  const node17 = new Node(17)
  const node18 = new Node(18)
  binaryTree.left = node12
  binaryTree.right = node13
  node12.left = node14
  node12.right = node15
  node13.left = node16
  node13.right = node17
  node14.left = node18


  it('DeepFirstSearch test', () => {
    const dfs = new DeepFirstSearch()

    dfs.run(root)

    const record = [
      1, 2, 4, 9, 10,
      5, 6, 3, 7,  8
    ]

    expect(dfs.record).to.deep.equal(record);
  })

  it('BreadthFirstSearch test', () => {
    const bfs = new BreadthFirstSearch()

    bfs.run(root)

    const record = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]

    expect(bfs.record).to.deep.equal(record);
  })

  it('PreOrderTraversal test', () => {
    const tree = new PreOrderTraversal()

    tree.run(binaryTree)

    const record = [
      11, 12, 14, 18, 15, 13, 16, 17
    ]

    expect(tree.record).to.deep.equal(record);
  })  

  it('PostOrderTraversal test', () => {
    const tree = new PostOrderTraversal()

    tree.run(binaryTree)

    const record = [
      18, 14, 15, 12, 16, 17, 13, 11
    ]

    expect(tree.record).to.deep.equal(record);
  })

  it('InOrderTraversal test', () => {
    const tree = new InOrderTraversal()

    tree.run(binaryTree)

    const record = [
      18, 14, 12, 15, 11, 16, 13, 17
    ]

    expect(tree.record).to.deep.equal(record);
  })


})