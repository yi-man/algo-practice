import { expect } from 'chai'
import 'mocha';

import { TrieTree } from './letter'

describe('letter tireTree test', () => {

  it('letter tireTree insert and find test')
  var tree = new TrieTree();

  var strs = ["how", "hi", "her", "hello", "so", "see"];
  for(let str of strs) {
    tree.insert(str);
  }

  expect(tree.find('hello')).to.equal(true)
  expect(tree.find('world')).to.equal(false)

})