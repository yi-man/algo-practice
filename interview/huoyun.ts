function maxProfit(
  wa: number,
  wb: number,
  wt: number,
  pa: number,
  pb: number
): number {
  let maxProfit = 0;
  for (let countA = 1; countA * wa < wt; countA++) {
    // 计算除去货物A后剩余的重量
    const remainingWeight = wt - countA * wa;
    // 如果剩余重量可以被货物B的单件重量整除，说明可以装满货物B
    if (remainingWeight % wb === 0) {
      // 计算货物B的数量
      const countB = remainingWeight / wb;
      // 计算当前组合的利润
      const profit = countA * pa + countB * pb;
      // 如果当前组合的利润大于之前的最高利润，则更新最高利润
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}
