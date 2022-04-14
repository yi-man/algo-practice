import { expect } from 'chai'
import 'mocha';
import { findSubstring } from './concatAllString'

describe('concatAllString test', () => {

  it('findSubstring test1', () => {
    const s = "barfoothefoobarman"
    const words = ["foo","bar"]

    expect(findSubstring(s, words)).to.deep.equal([0,9]);
  })

  it('findSubstring test2', () => {
    const s =  "wordgoodgoodgoodbestword"
    const words = ["word","good","best","good"]

    expect(findSubstring(s, words)).to.deep.equal([8]);
  })
})