import { expect } from 'chai';
import 'mocha';
import { sumOfThreeNums } from './sumOfThreeNums'

describe('sumOfThreeNums test', () => {

  it('get all collection of sumOfThreeNums', () => {
    const arr = [-100, -10, 200, 100, 0, 2, -2, 19, -10, -9, 4, 6]
    const record = sumOfThreeNums(arr)

    expect(record).to.deep.equal([[ -100, 0, 100 ], [ -10, -9, 19 ], [ -10, 4, 6 ], [ -2, 0, 2 ]])
  })
});
