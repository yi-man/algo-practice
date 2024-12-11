/**
给定一个只包含大写英文字母的字符串S，要求你给出对S重新排列的所有不相同的排列数。
如：S为ABA，则不同的排列有ABA、AAB、BAA三种。
 */

function getSizeOfStrings(s: string) {
  let str = s.slice();
  const set = new Set<string>();

  recur(0);

  return set.size;

  function swap(i: number, j: number) {
    const arr = str.split("");

    const temp = str[i];
    arr[i] = str[j];
    arr[j] = temp;

    str = arr.join("");
  }

  function recur(index: number) {
    if (index === str.length - 1) {
      set.add(str.slice());
    } else {
      for (let i = index; i < str.length; i++) {
        swap(index, i);
        recur(index + 1);
        swap(i, index);
      }
    }
  }
}

console.log(getSizeOfStrings("ABA"));
