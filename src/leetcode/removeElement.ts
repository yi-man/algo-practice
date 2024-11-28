function removeElement(nums: number[], val: number): number {
  let cursor = 0;
  for (let i = 0; i < nums.length; i++) {
    // 不相等时，将该值赋值到cursor
    if (nums[i] !== val) {
      nums[cursor] = nums[i];
      cursor++;
    }
  }

  return cursor;
}
