/**
 * @param nums 排好序的数字数组
 * @param target  需要寻找的数字
 */
export function binarySearch(nums: number[], target: number){
  let l = 0
  let h = nums.length - 1

  while(l < h) {
    const mid = Math.floor((l + h) / 2)  // 取中间值 

    if(nums[mid] === target) {
      return mid
    } else if(nums[mid] > target) {
      h = mid - 1
    } else {
      l = mid + 1
    }
  }

  return -1
}