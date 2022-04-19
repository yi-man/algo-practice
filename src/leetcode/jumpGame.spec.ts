import { expect } from 'chai';
import 'mocha';
import { jump } from './jumpGame'

describe('jumpGame test', () => {

  it('check jumpGame', () => {
    // const nums = [2,3,1,1,4]
    // const result = jump(nums)
    // expect(result).to.equal(2)

    const nums = [2,0,8,0,3,4,7,5,6,1,0,0,5,9,7,5,3,6]
    const result = jump(nums)
    expect(result).to.equal(4)
  })
});
