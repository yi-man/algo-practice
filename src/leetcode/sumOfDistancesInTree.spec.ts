import { expect } from 'chai';
import 'mocha';
import { sumOfDistancesInTree } from './sumOfDistancesInTree'

describe('sumOfDistancesInTree test', () => {

  it('numDecodings test', () => {
    const n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]

    const result = sumOfDistancesInTree(n, edges)

    expect(result).to.deep.equal([8,12,6,10,10,10])
  })
});
