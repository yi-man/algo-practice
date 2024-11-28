// 3258. 统计满足 K 约束的子字符串数量 I
function countKConstraintSubstrings(s: string, k: number): number {
  let pair = 0;

  for (let i = 0; i < s.length; i++) {
    let k0 = 0;
    let k1 = 0;
    for (let j = i; j < s.length; j++) {
      if (s[j] === "0") {
        k0++;
      } else {
        k1++;
      }
      if (k0 <= k || k1 <= k) {
        pair++;
      } else {
        break;
      }
    }
  }

  return pair;
}

// console.log(countKConstraintSubstrings("1010", 1));

function countKConstraintSubstrings2(
  s: string,
  k: number,
  queries: Array<[number, number]>
): number[] {
  const ret: number[] = [];

  const map = new Map<[number, number], number>();

  for (let i = 0; i < s.length; i++) {
    let pair = 0;

    let k0 = 0;
    let k1 = 0;
    for (let j = i; j < s.length; j++) {
      if (s[j] === "0") {
        k0++;
      } else {
        k1++;
      }
      if (k0 <= k || k1 <= k) {
        pair++;
        map.set([i, j], pair);
      } else {
        pair = 0;
        break;
      }
    }
  }

  // for (let i = 0; i < queries.length; i++) {
  //   const [start, end] = queries[i];
  //   const str = s.slice(start, end + 1);
  //   ret.push(countKConstraintSubstrings(str, k));
  // }

  return ret;
}

console.log(
  countKConstraintSubstrings2("010101", 1, [
    [0, 5],
    [1, 4],
    [2, 3],
  ])
);
