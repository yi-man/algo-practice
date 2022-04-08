import { expect } from 'chai';
import 'mocha';
import { binarySearch } from './binarySearch'

describe('binarySearch test', () => {
  it('find target', () => {
    const arr = [1,2,3,4,7,8]
    const target = 7
    const found = binarySearch(arr, target)

    expect(found).to.equal(4)
  })

  it('not find target', () => {
    const arr = [1,2,3,4,7,8]
    const target = 100
    const found = binarySearch(arr, target)

    expect(found).to.equal(-1)
  })
});