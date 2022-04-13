export function isHuiwen(s: string) {
  const len = s.length
  
  for(let i=0;i<len/2;i++){
    if(s[i]!==s[len-i-1]){
      return false
    }
  }

  return true
}

export function longestHuiwen(s: string) {
  const length = s.length
  const states = new Array(length).fill(0).map(()=>new Array(length).fill(false))

  const MAX_LEN = 0
  let MAX_PAIR = ''


  for (let len = 1; len <= length; len++) {//遍历所有的长度, 相当于有len个步骤
    for (let start = 0; start < length; start++) {
      const end = start + len - 1;
      if (end >= length) //下标已经越界，结束本次循环
        break;

      if (len === 1) {
        states[start][end] = true;
      } else if (len === 2 && s.charAt(start) === s.charAt(end)) {
        states[start][end] = true;
      } else if (states[start + 1][end - 1] && s.charAt(start) === s.charAt(end)) {
        states[start][end] = true;
      }
      
      if (states[start][end] && len > MAX_LEN) {
        MAX_PAIR = s.substring(start, end + 1);
      }
    }
  }
    
  return MAX_PAIR;
}
