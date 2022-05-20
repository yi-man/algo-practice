import { expect } from 'chai';
import 'mocha';
import { subsetsWithDup, numDecodings } from './subsetsWithDup'

describe('subsetsWithDup test', () => {

  it('subsetsWithDup test', () => {
    const input = [1,2,2]

    const result = subsetsWithDup(input)

    console.log(result)
    expect(result).to.deep.equal([ [ 1, 2, 2 ], [ 1, 2 ], [ 1 ], [ 2, 2 ], [ 2 ], [] ])
  })


  it('numDecodings test', () => {
    const input = "111111111111111111111111111111111111111111111"

    const result = numDecodings(input)

    expect(result).to.equal(1836311903)
  })
});
