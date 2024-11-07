const isYuanyin = (char: string) => {
  const yuanyin = "aoeiu";

  return yuanyin.includes(char.toLowerCase());
};

// 指定瑕疵长度，最长的元音字符
function longestYuanyinSubstring(str: string, flaw: number) {
  let max = 0;

  // 遍历字符串
  for (let i = 0; i < str.length; i++) {
    // 遍历每个字符
    const char = str[i];
    if (isYuanyin(char)) {
      let tmpFlaw = 0;
      for (let j = i + 1; j < str.length; j++) {
        // 不是元音
        if (!isYuanyin(str[j])) {
          // 瑕疵达到长度
          if (tmpFlaw === flaw) {
            max = Math.max(max, j - i);
            break;
          } else {
            tmpFlaw++;
          }
        }
      }
    }
  }

  return max;
}

console.log(longestYuanyinSubstring("asdbuiodevavvfgh", 0));
