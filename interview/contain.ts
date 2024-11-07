// partial中的字符在whole中顺序存在
function contain(partial: string, whole: string): number {
  // partial 比较的位置
  let p_current = 0;
  // whole的比较位置
  let w_current = 0;
  // whole的起始位置
  let w_start = 0;

  while (
    w_current < whole.length &&
    p_current < partial.length &&
    partial.length + w_start < whole.length
  ) {
    // 字符相等
    if (whole[w_current] === partial[p_current]) {
      // partial遍历到最后
      if (p_current === partial.length - 1) {
        return w_current;
      }
      p_current++;
      w_current++;
    } else {
      // 字符不相等
      // 遍历到whole最后
      if (w_current === whole.length - 1) {
        p_current = 0;
        w_start++;
        w_current = w_start;
      } else {
        // 不相等，继续遍历
        w_current++;
      }
    }
  }

  return -1;
}

console.log('contain("ace", "abcde")', contain("ace", "abcde"));
console.log('contain("fgh", "abcde")', contain("fgh", "abcde"));
