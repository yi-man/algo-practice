import { expect } from 'chai';
import 'mocha';
import { maxRunTime } from './2141_maxRunTime';

describe('2141_maxRunTime test', () => {
  it('Example 1: n=2, batteries=[3,3,3]', () => {
    const n = 2;
    const batteries = [3, 3, 3];
    const result = maxRunTime(n, batteries);
    // 总电量 = 9，需要 2*4=8，可行
    // 但 2*5=10 > 9，不可行
    // 所以答案是 4
    expect(result).to.equal(4);
  });

  it('Example 2: n=2, batteries=[1,1,1,1]', () => {
    const n = 2;
    const batteries = [1, 1, 1, 1];
    const result = maxRunTime(n, batteries);
    // 总电量 = 4，需要 2*2=4，可行
    // 2*3=6 > 4，不可行
    // 所以答案是 2
    expect(result).to.equal(2);
  });

  it('Example 3: n=3, batteries=[10,10,3,5]', () => {
    const n = 3;
    const batteries = [10, 10, 3, 5];
    const result = maxRunTime(n, batteries);
    // 总电量 = 28
    // 对于 t=8: min(10,8)+min(10,8)+min(3,8)+min(5,8) = 8+8+3+5 = 24
    // 需要 3*8=24，可行
    // 对于 t=9: min(10,9)+min(10,9)+min(3,9)+min(5,9) = 9+9+3+5 = 26
    // 需要 3*9=27，不可行
    // 所以答案是 8
    expect(result).to.equal(8);
  });

  it('Edge case: n=1, batteries=[1,2,3]', () => {
    const n = 1;
    const batteries = [1, 2, 3];
    const result = maxRunTime(n, batteries);
    // 总电量 = 6，只需要 1 台电脑
    // 可以运行 6 分钟
    expect(result).to.equal(6);
  });

  it('Edge case: n=3, batteries=[1,1,1]', () => {
    const n = 3;
    const batteries = [1, 1, 1];
    const result = maxRunTime(n, batteries);
    // 总电量 = 3，需要 3*1=3，可行
    // 3*2=6 > 3，不可行
    // 所以答案是 1
    expect(result).to.equal(1);
  });
});




