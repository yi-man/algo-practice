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