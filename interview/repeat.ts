/**
 * 1.	无重复字符的最长子串：给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
比如提供abaabcaa，最长不重复子串是3，比如aaa是1，提供awwabw是3
 * 
 */

function getLongestUniqueSubstring(s: string): number {
  let longest = -1;

  for (let i = 0; i < s.length; i++) {
    if (longest > s.length - i) {
      break;
    }

    const used: { [k: string]: boolean } = {};
    let len = 0;

    for (let j = i; j < s.length; j++) {
      if (used[s[j]]) {
        longest = Math.max(longest, len);

        break;
      } else {
        used[s[j]] = true;
        len++;

        if (j === s.length - 1) {
          longest = Math.max(longest, len);
        }
      }
    }
  }

  return longest;
}

// console.log(getLongestUniqueSubstring("bwac"));
console.log(getLongestUniqueSubstring("awwabwac"));
// console.log(getLongestUniqueSubstring("abrtyuiaabcaa"));
