/**
 * 每次爬一阶或者二阶， 共有多少种爬法
 * @param n 阶梯数
 */
export function climb(n: number): number {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  return climb(n - 1) + climb(n - 2)
}

export function climb2(n: number): number {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  let ret = 0;
  let pre2 = 1;
  let pre1 = 2;
  let i = 3;

  while(i <= n) {
    const now = pre1 + pre2;

    if (i === n) {
      ret = now;
    }

    i++;
    pre2 = pre1;
    pre1 = now;
  }

  return ret;
}