import { expect } from 'chai';
import 'mocha';
import { longestValidParentheses } from './longestValidParentheses'

describe('longestValidParentheses test', () => {

  it('longestValidParentheses stack test', () => {
    const maxLen = longestValidParentheses(')()()')
  
    expect(maxLen).to.equal(4)
  })
});
