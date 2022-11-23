import { expect } from 'chai'
import 'mocha';

import { findAllBST } from './allBST'

describe('findAllBST', () => {
  

  it('n = 3', () => {
    expect(findAllBST(3)).to.deep.equal([[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]])
  })

  it('n = 1', () => {
    expect(findAllBST(1)).to.deep.equal([[1]])
  })

  


})