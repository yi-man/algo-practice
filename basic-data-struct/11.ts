function sumFourDivisors(nums: number[]): number {
  const n = nums.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    const num = nums[i];

    let count = 0;
    let total = 0;
    for (let j = 1; j * j <= num; j++) {
      if (num % j === 0) {
        count++;
        total += j;

        if (j * j !== num) {
          count++;
          total += num / j;
        }
      }
    }

    if (count === 4) {
      ans += total;
    }
  }

  return ans;
}
