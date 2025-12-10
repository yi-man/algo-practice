function specialTriplets(nums: number[]): number {
  const numMap = new Map<number, number[]>();

  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(nums[i])) {
      numMap.get(nums[i])?.push(i);
    } else {
      numMap.set(nums[i], [i]);
    }
  }

  let count = 0;

  for (const [value, indexes] of numMap.entries()) {
    if (indexes.length < 2) {
      continue;
    }
    const vj = value / 2;

    if (!numMap.has(vj)) {
      continue;
    }

    const vjIndexes = numMap.get(vj);

    for (let p = 0; p < indexes.length; p++) {
      for (let q = p + 1; q < indexes.length; q++) {
        const c = (
          vjIndexes?.filter((index) => {
            return index > p && index < q;
          }) || []
        ).length;

        count += c;
      }
    }
  }

  return count;
}
