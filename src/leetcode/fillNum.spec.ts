import { expect } from 'chai';
import 'mocha';
import { fillNum } from './fillNum'

describe('fillNum test', () => {

  it('check fillNum', () => {
    const result = fillNum(3, 4)

    console.log(result)
    expect(result).to.deep.equal(
      [
        [ 1, 2, 4, 7 ],
        [ 3, 5, 8, 10 ],
        [ 6, 9, 11, 12 ],
      ]
    )
  })
});
