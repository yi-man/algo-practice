import { expect } from 'chai';
import 'mocha';
import { sumOfThreeNums, closestValue } from './sumOfThreeNums'

describe('sumOfThreeNums test', () => {

  it('get all collection of sumOfThreeNums', () => {
    const arr = [-100, -10, 200, 100, 0, 2, -2, 19, -10, -9, 4, 6]
    const record = sumOfThreeNums(arr)

    expect(record).to.deep.equal([[ -100, 0, 100 ], [ -10, -9, 19 ], [ -10, 4, 6 ], [ -2, 0, 2 ]])
  })

  it('closestValue test', () => {
    // const arr = [-100, -10, 200, 100, 0, 2, -2, 19, -10, -9, 4, 6]
    // const value = closestValue(arr, 1),

    // expect(value).to.equal(0)


    const arr = [1,1,1,0]
    const value = closestValue(arr, 100)

    expect(value).to.equal(3)

  })
});
