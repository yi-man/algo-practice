// 数组必须有序 不存在重复
const biaryFind = (sortedArr: number[], target: number) => {
  if (sortedArr.length === 0) return -1

  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      if (target === sortedArr[mid]) {
          return mid
      } else if (target < sortedArr[mid]) {
          high = mid - 1
      } else {
          low = mid + 1
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