import { expect } from 'chai';
import 'mocha';
import { sumOfThreeNums } from './sumOfThreeNums'

describe('sumOfThreeNums test', () => {

  it('get all collection of sumOfThreeNums', () => {
    const arr = [-100, -10, 200, 100, 0, 2, -2, 19, -10, -9, 4, 6]
    const record = sumOfThreeNums(arr)

    console.log(record)

    // expect(str).to.equal('1, 2, 10, 20, 100, 200, 1000, 2000, 10000, 20000')
  })
});
