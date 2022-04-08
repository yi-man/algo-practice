const swap = (arr: number[], i: number, j: number) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// 获取 pivot 交换完后的index
const partition = (arr: number[], pivot: number, left: number, right: number) => {
  const pivotVal = arr[pivot]
  // 记录小于 pivotVal的索引
  let smallIndex = left
  for (let i = left; i < right; i++) {
      if (arr[i] < pivotVal) {
          swap(arr, i, smallIndex)
          smallIndex++
      }
  }
  swap(arr, smallIndex, pivot)
  return smallIndex
}

export const quickSort = (arr: number[], left: number, right: number) => {
  if (left < right) {
      const pivot = right
      const partitionIndex = partition(arr, pivot, left, right)
      quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1)
      quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
  }

}
