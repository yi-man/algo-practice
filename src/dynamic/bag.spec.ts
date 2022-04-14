import { expect } from 'chai'
import 'mocha';
import { bag } from './bag'

describe('bag test', () => {

  it('bag test', () => {
    const weight = [2,2,4,6,3]; 
    const w = 9; 

    const maxW = bag(weight, w)

    expect(maxW).to.equal(9);
  })

})