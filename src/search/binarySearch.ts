/**
 * @param nums 排好序的数字数组
 * @param target  需要寻找的数字
 */
export function binarySearch(nums: number[], target: number){
  let l = 0
  let h = nums.length - 1

  while(l <= h) {
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

// 查找第一个等于给定值
const biaryFindFirst = (sortedArr: number[], target: number) => {
  if (sortedArr.length === 0) return -1
  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
      const mid = Math.floor((low + high) / 2)

      if (target < sortedArr[mid]) {
          high = mid - 1
      } else if (target > sortedArr[mid]) {
          low = mid + 1
      } else {
          if (mid === 0 || sortedArr[mid - 1] < target) return mid
          high = mid - 1
      }
  }
  return -1
}

// 查找最后一个相等的数
const biaryFindLast = (sortedArr: number[], target: number) => {
  if (sortedArr.length === 0) return -1
  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      if (target < sortedArr[mid]) {
          high = mid - 1
      } else if (target > sortedArr[mid]) {
          low = mid + 1
      } else {
          if (mid === sortedArr.length - 1 || sortedArr[mid + 1] > target) return mid
          low = mid + 1
      }
  }
  return -1
}

// 查找第一个大于等于给定值的元素
const biaryFindFistBig = (sortedArr: number[], target: number) => {
  if (sortedArr.length === 0) return -1
  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      if (target <= sortedArr[mid]) {
          if (mid === 0 || sortedArr[mid - 1] < target) return mid
          high = mid - 1
      } else {
          low = mid + 1
      }
  }
  return -1
}

// 查找最后一个小于等于给定值的元素
const biaryFindLastSmall = (sortedArr: number[], target: number) => {
  if (sortedArr.length === 0) return -1
  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      if (target < sortedArr[mid]) {
          high = mid - 1
      } else {
          if (mid === sortedArr.length - 1 || sortedArr[mid + 1] >= target) return mid
          low = mid + 1
      }
  }
  return -1
}