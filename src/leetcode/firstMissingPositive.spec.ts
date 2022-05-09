import { expect } from 'chai';
import 'mocha';
import { firstMissingPositive } from './firstMissingPositive'

describe('firstMissingPositive test', () => {
  it('firstMissingPositive test, [3,4,-1,1]', () => {
    const nums = [3,4,-1,1]

    const result = firstMissingPositive(nums)
    expect(result).to.equal(2)
  })

  it('firstMissingPositive test,   [1,1]', () => {
    const nums =  [1,1]

    const result = firstMissingPositive(nums)
    expect(result).to.equal(2)
  })

  it('firstMissingPositive test, [1,2,2,1,3,1,0,4,0]', () => {
    const nums = [1,2,2,1,3,1,0,4,0]

    const result = firstMissingPositive(nums)
    expect(result).to.equal(5)
  })


});
