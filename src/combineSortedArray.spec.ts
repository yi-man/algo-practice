import { expect } from 'chai';
import 'mocha';
import { combineSortedArry } from './combineSortedArray'

describe('CombineSortedArray test', () => {

  it('should get right combined array ', () => {
    const arr1 = [1, 10, 100, 1000, 10000]
    const arr2 = [2, 20, 200, 2000, 20000]

    const combined = combineSortedArry(arr1, arr2)

    let str = combined.reduce((acc, item) => {
      return acc ? `${acc}, ${item}` : `${item}`
    }, '')

    expect(str).to.equal('1, 2, 10, 20, 100, 200, 1000, 2000, 10000, 20000')
  })
});
