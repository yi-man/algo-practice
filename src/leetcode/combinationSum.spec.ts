import { expect } from 'chai';
import 'mocha';
import { combinationSum, combinationSumDfs, combinationSum2, combinationSumDfs2 } from './combinationSum'

describe('combinationSum test', () => {

  it('combinationSum test', () => {
    const candidates = [2,3,6,7], target = 7

    const result = combinationSum(candidates, target)
    expect(result).to.deep.equal([[2,2,3],[7]])
  })

  it('combinationSumDfs test', () => {
    const candidates = [2,3,6,7], target = 7

    const result = combinationSumDfs(candidates, target)
    expect(result).to.deep.equal([[7], [2,2,3]])
  })

  it('combinationSum2 use unique member test', () => {
    const candidates = [10,1,2,7,6,1,5], target = 8

    const result = combinationSum2(candidates, target)
    expect(result).to.deep.equal([[1,1,6],[1,2,5],[1,7],[2,6]])
  })
});
