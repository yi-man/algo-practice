import { expect } from 'chai';
import 'mocha';
import { multiply } from './string'

describe('string test', () => {

  it('multiply test', () => {
    const num1 = "123", num2 = "456"

    const result = multiply(num1, num2)
    expect(result).to.equal('56088')
  })
});
