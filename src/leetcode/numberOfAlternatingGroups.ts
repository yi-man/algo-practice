// 3208. 交替组 II
function numberOfAlternatingGroups(colors: number[], k: number): number {
  let count = 0;

  for (let i = 0; i < colors.length; i++) {
    // 获取k个，看是否满足
    // 不一定从0开始
    let prev = colors[i];
    let flag = true;
    for (let j = i + 1; j < i + k; j++) {
      const index = j % colors.length;
      const v = colors[index];

      if (v !== prev) {
        prev = v;
      } else {
        flag = false;
        break;
      }
    }

    if (flag) {
      count++;
    }
  }

  return count;
}

function numberOfAlternatingGroups2(colors: number[], k: number): number {
  const n = colors.length;
  let res = 0,
    cnt = 1;
  for (let i = -k + 2; i < n; i++) {
    if (colors[(i + n) % n] !== colors[(i - 1 + n) % n]) {
      cnt++;
    } else {
      cnt = 1;
    }
    if (cnt >= k) {
      res++;
    }
  }
  return res;
}

console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1, 0, 1], 6));
