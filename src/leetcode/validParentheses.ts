/**
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

 */


export function isValid(s:string) {
  const len = s.length
  
  if(len % 2 !== 0){
    return false
  }

  const stack = []

  for(let i=0; i<len; i++) {
    const char = s.charAt(i)

    if(char === '(' || char === '{' || char === '[') {
      stack.push(char)
    } else {
      if (stack.length === 0) {
        return false
      } else {
        const last = stack.pop()
        if (last === '(' && char !== ')') {
          return false
        } else if (last === '{' && char !== '}') {
          return false
        } else if (last === '[' && char !== ']') {
          return false
        }
      }
    }
  }

  return stack.length === 0
}