import { expect } from 'chai'
import 'mocha';
import { isHuiwen, longestHuiwen } from './huiwen'

describe('huiwen test', () => {

  it('isHuiwen test', () => {
    expect(isHuiwen('a')).to.be.true;
    expect(isHuiwen('ab')).to.be.false;
    expect(isHuiwen('abc')).to.be.false;
    expect(isHuiwen('abcba')).to.be.true;
    expect(isHuiwen('abccba')).to.be.true
  })


  it('longestHuiwen test', () => {
    const longest = longestHuiwen('abcdefghijkkjihgllds');

    expect(longest).to.equal('ghijkkjihg');
  })


})