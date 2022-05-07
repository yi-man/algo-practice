import { expect } from 'chai';
import 'mocha';
import { getPermutation } from './getPermutation'

describe('getPermutation test', () => {

  it('getPermutation result', () => {
    const n=3, k=3

    const result= getPermutation(n,k)

    expect(result).to.equal('213')
  })

  it('getPermutation result 3,2', () => {
    const n=3, k=1

    const result= getPermutation(n,k)

    expect(result).to.equal('123')
  })

});
