function longestPalindrome(s: string) {
  const length = s.length;
  const P = [];
  
  for(let i = 0; i < length; i++) {
    P.push(new Array(length).fill(0))
  }

  const maxLen = 0;
  let maxPal = "";

  for (let len = 1; len <= length; len++) {//遍历所有的长度
    for (let start = 0; start < length; start++) {
      const end = start + len - 1;
      if (end >= length) //下标已经越界，结束本次循环
        break;
  
      //长度为 1 和 2 的单独判断下
      if ((len == 1 || len == 2 || P[start + 1][end - 1]) && s.charAt(start) === s.charAt(end)) {
        P[start][end] = 1;
      }
      
      if (P[start][end] && len > maxLen) {
          maxPal = s.substring(start, end + 1);
      }
    }
  }
    
  return maxPal;
}
