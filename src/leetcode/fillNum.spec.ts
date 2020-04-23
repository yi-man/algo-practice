import { expect } from 'chai';
import 'mocha';
import { fillNum } from './fillNum'

describe('fillNum test', () => {

  it('check fillNum', () => {
    const result = fillNum(3, 4)

    console.log(result)
    expect(result).to.deep. equal(
      [
        [ 4, 0, 0, 0 ],
        [ 2, 5, 0, 0 ],
        [ 1, 3, 6, 0 ],
      ]
    )
  })
});
