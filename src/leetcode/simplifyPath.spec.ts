import { expect } from 'chai';
import 'mocha';
import { simplifyPath } from './simplifyPath'

describe('simplifyPath test', () => {

  it('simplifyPath test', () => {
    const input = "/a/../../b/../c//.//"

    const result = simplifyPath(input)
    expect(result).to.equal("/c")
  })
});
