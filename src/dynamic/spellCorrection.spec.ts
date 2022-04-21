import { expect } from 'chai'
import 'mocha';
import { getMinEditDistance, lwstDP } from './spellCorrection'

describe('spellCorrection test', () => {

  it('getMinEditDistance test', () => {
    const input = 'mitcmu'
    const target = 'mtacnu'

    const min = getMinEditDistance(input, target)

    expect(min).to.equal(3);
  })

  it('lwstDP test', () => {
    const input = 'mitcmu'
    const target = 'mtacnu'

    const min = lwstDP(input, target)

    expect(min).to.equal(3);
  })

})