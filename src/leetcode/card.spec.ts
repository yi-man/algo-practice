import { expect } from 'chai';
import 'mocha';
import { judge } from './card'

describe('card test', () => {

  it('check if tonghua', () => {
    const arr = [0, 43, 21, 1, 2, 32, 3, 9, 4]
    const result = judge(arr)

    expect(result).to.equal(true)
  })
});
