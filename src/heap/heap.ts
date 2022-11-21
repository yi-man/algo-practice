const swap = (arr: number[], i: number, j: number) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

export class Heap{
  data: number[]
  constructor(data: number[]){
    this.data = this.create(data)
  }

  /**
   * 
   * @param data 原数据
   * @param i 当前节点
   */
  private heapify(data: number[], i: number) {
    let current = i

    while(true) {
      const max = this._getMax(data, current)

      if (max === current) {
        break
      }

      swap(data, current, max) 
      
      current = max
    }
  }

  private create(data: number[]){
    const newArr = data.slice()
    const len = data.length
    const startIndex = Math.floor(len/2) - 1

    for(let i = startIndex; i >= 0; i--) {
      this.heapify(newArr, i) 
    }

    return newArr
  }

  _getMax(data: number[], current: number) {
    const n = data.length
    let max = current
    const left =  2*current + 1
    const right = 2*current + 2

    if (left > n && right > n) {
      return max
    }

    if (left <= n && data[max] < data[left]) {
      max = left
    }

    if (right <= n && data[max] <  data[right]) {
      max = right
    }


    return max
  }

  insert(value: number) {
    this.data.push(value)
    const startIndex = Math.floor(this.data.length/2) - 1
    let current = startIndex

    while (current >= 0) {
      const max = this._getMax(this.data, current)

      if (max === current) {
        break
      } else {
        swap(this.data, current, max)

        if(current===0) {
          break
        }

        current = Math.floor((current - 1) / 2)
      }
    }  
  }

  deleteMax() {
    if (this.data.length === 0) {
      return -1
    }

    const max = this.data[0]
    const last = this.data.pop() as number

    this.data[0] = last
    this.heapify(this.data, 0)

    return max
  }

  sort(){
    const newArr = this.data.slice()
    const ret = []

    while(newArr.length > 0) {
      ret.unshift(newArr[0])

      swap(newArr, 0, newArr.length - 1)
      newArr.pop()
      this.heapify(newArr, 0)
    }

    return ret
  }
}