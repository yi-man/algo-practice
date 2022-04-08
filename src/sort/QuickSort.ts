const swap = (arr: number[], i: number, j: number) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


const partition = (arr: number[], pivot: number, left: number, right: number) => {
  const pivotVal = arr[pivot]
  let smallIndex = left
  let maxIndex = right

  while(smallIndex < maxIndex) {
    // 找大于  pivotVal 的数
    while(arr[smallIndex] <= pivotVal && smallIndex < maxIndex) {
      smallIndex++
    }

    // 找小于 pivotVal 的数
    while(arr[maxIndex] >= pivotVal && smallIndex < maxIndex) {
      maxIndex--
    }

    if(smallIndex < maxIndex) {
      swap(arr, smallIndex, maxIndex)
    }
  }

  swap(arr, maxIndex, pivot)

  return smallIndex
}

// swap from begining
// const partition = (arr: number[], pivot: number, left: number, right: number) => {
//   const pivotVal = arr[pivot]
//   // 记录小于 pivotVal的索引
//   let smallIndex = left
//   for (let i = left; i < right; i++) {
//       if (arr[i] < pivotVal) {
//           swap(arr, i, smallIndex)
//           smallIndex++
//       }
//   }
//   swap(arr, smallIndex, pivot)
//   return smallIndex
// }


export const quickSort = (arr: number[], l?: number, r?: number) => {
  const left = l || 0
  const right = r || arr.length - 1

  if (left < right) {
      const pivot = right
      const partitionIndex = partition(arr, pivot, left, right)

      partitionIndex - 1 > left && quickSort(arr, left, partitionIndex - 1)
      partitionIndex + 1 < right && quickSort(arr, partitionIndex + 1, right)
  }
}
