export function findRepeatNumber(nums: number[]){
  let i = 0

  while(i < nums.length) {
    // 在应该的位置， 递增i，跳过后面步骤
    if(nums[i] === i) {
      i++
      continue
    }

    // 应该的位置已经有相同值，表明有重复的数字
    if (nums[i] === nums[nums[i]]) {
      return nums[i]
    }

    // 不在应该的位置，将该值放到他应该在的位置上
    const tmp = nums[i]
    nums[i] = nums[tmp]
    nums[tmp] = tmp
  }

  return -1
}