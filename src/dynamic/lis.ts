// 例如，{ 3，5，7，1，2，8 } 的 LIS 是 { 3，5，7，8 }，长度为 4
export const lengthOfLIS = function (nums: number[]) {
  const len = nums.length
  if(len < 2) {
    return len
  }

  const states: number[] = new Array(len).fill(1)

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if(nums[i] > nums[j]) {
        states[i] = Math.max(states[i], states[j] + 1)
      }
    }
  }
      
  return Math.max(...states)
};

export const getAllLIS = function (nums: number[]) {
  const len = nums.length

  let maxLen = 0
  const ret:{
    [len: string]: number[][]
  } = {}


  function backtrace(start: number, arr: number[]) {  
    for (let i = start; i < len; i++) {
      if(arr.length === 0) {
        arr.push(nums[i])
        backtrace(start + 1, [...arr])
        arr.pop()
      } else {
        if(nums[i] > arr[arr.length - 1]) {
          arr.push(nums[i])
          backtrace(i + 1, [...arr])
          arr.pop()
        }
      }  
    }

    if(arr.length >= maxLen) {
      maxLen = arr.length

      if(!ret[maxLen]) {
        ret[maxLen] = []
      }
      ret[maxLen].push(arr)
    }
  }

  backtrace(0, [])
      
  return ret[maxLen]
};