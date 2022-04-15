export function longestValidParentheses(s: string){
  let maxLen = 0
  const stack = [-1]

  for(let i=0; i < s.length; i++) {
    const v = s[i]
    if(v === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length > 0) {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]) 
      } else {
        stack.push(i)
      }
    }
  }

  return maxLen
}