/**
 * @description 排好序的数组， 支持增、删
 */
export class SortedArray{
  data: Array<number | undefined>
  capacity: number
  currentSize: number

  constructor(size: number) {
    this.data = new Array(size)
    this.capacity = size
    this.currentSize = 0
  }

  findIndex(num: number) {
    let insertPosition = this.currentSize

    for(let i = 0; i < this.currentSize; i++) {
      const v = this.data[i]
      if (v !== undefined) {
        if (v < num) {
          continue
        } else {
          insertPosition = i
          break
        }
      } else {
        break
      }
    }

    return insertPosition
  }

  add(num: number) {
    if (this.currentSize === this.capacity) {
      // throw new Error(`已超过数组最大长度${this.capacity}`)
      return false
    }

    const insertPosition = this.findIndex(num)

    for(let i = this.currentSize; i > insertPosition; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[insertPosition] = num

    this.currentSize++
  }

  /**
   * @description 删除固定的数
   * @param num 
   */
  delete(num: number) {
    if (this.currentSize === 0) {
      return false
    }

    const insertPosition = this.findIndex(num)


    for(let i = insertPosition; i < this.currentSize; i++) {
      this.data[i] = this.data[i + 1]
    }
    this.data[this.currentSize] = undefined
    
    this.currentSize--
  }
}
