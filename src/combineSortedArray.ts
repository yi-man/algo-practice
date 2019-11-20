/**
 * @description 合并两个有序数组
 * @param arr1 
 * @param arr2 
 */
export function combineSortedArry(arr1: number[], arr2: number[]) {
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
