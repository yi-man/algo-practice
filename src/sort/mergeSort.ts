import { combineSortedArray } from './combineSortedArray'

export function mergeSort(arr: number[]): number[] {
  const len = arr.length;

  if (len < 2) {
    return arr
  }

  const middle = Math.floor((len / 2))

  const left = arr.slice(0, middle) // 分割数组
  const right = arr.slice(middle)

    // 递归 分解 合并
  return combineSortedArray(mergeSort(left), mergeSort(right))
}
