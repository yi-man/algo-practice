/**
 * @description 合并两个有序数组
 * @param arr1 
 * @param arr2 
 */
export function combineSortedArray(arr1: number[], arr2: number[]) {
  const ret = []

  let i = 0
  let j = 0
  while(i < arr1.length || j < arr2.length) {
    const v1 = arr1[i]
    const v2 = arr2[j]

    if (v1 < v2) {
      ret.push(v1)
      i++
    } else {
      ret.push(v2)
      j++
    }

    if (i === arr1.length && j < arr2.length) {
      for (; j < arr2.length; j++) {
        ret.push(arr2[j])
      }
    }

    if (j === arr2.length && i < arr1.length) {
      for (; i < arr1.length; i++) {
        ret.push(arr1[i])
      }
    }
  }

  return ret
}

/**
 * @description 合并有序数组的另一种实现
 * @param left 左数组
 * @param right 右数组
 */
export const combineSortedArray2 = (left: number[], right: number[]) => {
  const temp = []
  let leftIndex = 0
  let rightIndex = 0
  // 判断2个数组中元素大小，依次插入数组
  while (left.length > leftIndex && right.length > rightIndex) {
      if (left[leftIndex] <= right[rightIndex]) {
          temp.push(left[leftIndex])
          leftIndex++
      } else {
          temp.push(right[rightIndex])
          rightIndex++
      }
  }
  // 合并 多余数组
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
