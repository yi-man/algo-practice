// m * n 数组(m < n)， 往里面按顺序填入  1~m*n 的数字， 按对角线方向

export function fillNum(m: number, n: number) {
  const arr: Array<Array<number>> = []
  for(let k = 0; k < m; k++ ) {
    arr.push(new Array(n).fill(0))
  }

  let total = 0;

  // 较大值填完
  for(let i = 0; i < n; i ++) {
    for(let j = i; j >= 0; j--) {
      if ( i >= m) {
        if ( i - j >= m) {
          continue;
        } else {
          arr[i - j][j] = ++total;
        }
      } else {
        arr[i - j][j] = ++total;
      } 
    }
  }

  const left = m - 1;

  // 剩余反斜角
  for(let k = left; k > 0; k--) {
    for(let p = 1; p <= k; p++) {
      arr[m - k + p - 1][n - p] = ++total;
    }
  }

  return arr;
}