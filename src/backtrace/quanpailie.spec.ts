import { expect } from 'chai';
import 'mocha';
import { sort, permute, permute2 } from './quanpailie'

describe('quanpailie test', () => {

  it('get quanpailie result', () => {
    const input = ['a', 'b', 'c']

    const record = sort(input)
    expect(record).to.deep.equal(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])

    const record1 = permute(input)
    expect(record1).to.deep.equal([['a', 'b', 'c'], ['a', 'c', 'b'], ['b', 'a', 'c'], ['b', 'c', 'a'], ['c', 'a', 'b'], ['c', 'b', 'a']])

    const record2 = permute2(input)
    expect(record2).to.deep.equal([['a', 'b', 'c'], ['a', 'c', 'b'], ['b', 'a', 'c'], ['b', 'c', 'a'], ['c', 'b', 'a'], ['c', 'a', 'b']])

  })
});
