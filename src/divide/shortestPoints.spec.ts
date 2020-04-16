import { expect } from 'chai';
import 'mocha';
import { getShortestPoints } from './shortestPoints'

describe('shortestPoints test', () => {

  it('get correct shortest points', () => {
    const arr = [
      {
        x: 1,
        y: 1,
      },
      {
        x: 0,
        y: 2,
      },
      {
        x: 3,
        y: 3,
      },
    ]
    const record = getShortestPoints(arr)

    console.log(record)

    expect(str).to.equal('1, 2, 10, 20, 100, 200, 1000, 2000, 10000, 20000')
  })
});
