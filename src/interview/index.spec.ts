import { expect } from 'chai'
import 'mocha';
import { test } from './index'

describe(' test', () => {

  it('getMinEditDistance test', () => {
    const input = 'mitcmu'
    const target = 'mtacnu'

    const min = test(input, target)

    expect(min).to.equal(3);
  })

})