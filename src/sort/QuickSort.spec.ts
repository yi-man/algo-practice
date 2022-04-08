import { expect } from 'chai';
import 'mocha';
import { quickSort } from './QuickSort'

describe('quickSort test', () => {
  it('correct sort', () => {
    const arr = [1,10,5,2,3,98,100,4,7,8]
    quickSort(arr)

    expect(arr).to.deep.equal([1,2,3,4,5,7,8,10,98,100])
  })
});