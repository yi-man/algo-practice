import { expect } from 'chai';
import 'mocha';
import { mergeSort } from './mergeSort';

describe('mergeSort test', () => {

  it('should get right combined array ', () => {
    const arr = [1, 10, 100, 1000, 10000, 2, 20, 200, 2000, 20000, -1, 9]

    const sorted = mergeSort(arr)

    expect(sorted).to.deep.equal([-1, 1, 2, 9, 10, 20, 100, 200, 1000, 2000, 10000, 20000])
  })
});
