/**
给你一个非负整数数组 nums ，你最初位于数组的第一个位置。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
你的目标是使用最少的跳跃次数到达数组的最后一个位置。
假设你总是可以到达数组的最后一个位置。
 */

export function jump(nums: number[]): number {
  const len = nums.length

  const memo: {[k:string]: number} = {}

  if(len === 1) {return 0}

  // 默认第一个数，如果第一个等于0，则不能跳跃
  if(nums[0] === 0) {
    return -1
  }

  for(let i = 0; i < len; i++) {
    const v = nums[i]
    
    if (!memo[i]) {
      memo[i] = 0
    }
    
    if(v !== 0) {
      for(let j=i+1; j<=i+v; j++){
        if (j < len) {
          if (memo[j]) {
            memo[j] = Math.min(memo[i] + 1, memo[j])
          } else {
            memo[j] = memo[i] + 1
          }
        }
      }
    }
  }

  return memo[len-1]
}


export function jump2(nums: number[]) {
  const length = nums.length;
  let steps = 0;
  let maxPosition = 0; 

  let end = 0;
  
  for (let i = 0; i < length - 1; i++) {
      maxPosition = Math.max(maxPosition, i + nums[i]); 

      if (i == end) {
          end = maxPosition;
          steps++;
      }
  }
  return steps;
}