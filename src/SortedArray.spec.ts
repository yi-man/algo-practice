import { expect } from 'chai';
import 'mocha';
import { SortedArray } from './SortedArray'

describe('SortedArray test', () => {

  it('should get right value', () => {
    const sa = new SortedArray(10)
    sa.add(4)
    sa.add(2)
    sa.add(100)
    sa.add(-1)
    sa.delete(2)

    expect(sa.data[2]).to.equal(100)
  })
});
