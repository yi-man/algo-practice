// m * n 数组(m < n)， 往里面按顺序填入  1~m*n 的数字， 按对角线方向

export function fillNum(m: number, n: number) {
  const arr: Array<Array<number>> = []
  for(let k = 0; k < m; k++ ) {
    arr.push(new Array(n).fill(0))
  }

  let total = 0;

  for(let i = 0; i < m; i ++) {
    for(let j = 0; j <= i; j++) {
      arr[j][i - j] = ++total;
    }
  }

  return arr;
}