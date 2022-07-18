import { expect } from 'chai'
import 'mocha';
import { lengthOfLIS } from './lis'

describe('Longest Increasing Subsequence test', () => {

  it('lengthOfLIS test', () => {
    expect(lengthOfLIS([3, 5, 7, 1, 2, 8 ])).to.equal(4);

    expect(lengthOfLIS([2, 1, 5, 3, 6, 4, 8, 9, 7])).to.equal(5)
  })

  // it('LIS test', () => {
  //   // expect(LIS([3, 5, 7, 1, 2, 8 ])).to.deep.equal([ 3, 5, 7, 8 ] );

  //   expect(LIS([2, 1, 5, 3, 6, 4, 8, 9, 7])).to.equal(5)
  // })
})