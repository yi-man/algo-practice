/**
给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。

 https://leetcode-cn.com/problems/jump-game

 */
export function canJump(nums: number[]): boolean {
  const visited: boolean[] = new Array(nums.length).fill(false)
  visited[0]=true

  for(let i=0; i<nums.length; i++){
      const step = nums[i]

      if(step === 0) {
          continue
      } else {
          if(visited[i]) {
              for(let j=1; j<=step; j++){
                  if(i+j < nums.length) {
                      visited[i+j] = true
                  }else{
                      break;
                  }        
              }
          }         
      }
  }

  return visited[nums.length - 1]
}

export function canJump2(nums:number[]):boolean{
  const n = nums.length;
  let rightmost = 0;
  for (let i = 0; i < n; ++i) {
      if (i <= rightmost) {
          rightmost = Math.max(rightmost, i + nums[i]);
          if (rightmost >= n - 1) {
              return true;
          }
      }
  }
  return false;
}