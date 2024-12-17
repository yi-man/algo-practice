// 2717. 半有序排列
function semiOrderedPermutation(nums: number[]): number {
  let firstIndex = -1;
  let lastIndex = -1;

  // 找到对应的index
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      firstIndex = i;
    } else if (nums[i] === nums.length) {
      lastIndex = i;
    } else {
      if (firstIndex !== -1 && lastIndex !== -1) {
        break;
      }
    }
  }

  // firstIndex移动到位置0， lastIndex移动到n
  let times = firstIndex - 0 + (nums.length - 1 - lastIndex);

  if (firstIndex > lastIndex) {
    times -= 1;
  }

  return times;
}

// console.log(semiOrderedPermutation([2, 1, 4, 3]));
// console.log(semiOrderedPermutation([2, 4, 1, 3]));
console.log(semiOrderedPermutation([1, 3, 4, 2, 5]));
