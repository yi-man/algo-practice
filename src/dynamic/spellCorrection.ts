/**
 当你在搜索框中，一不小心输错单词时，搜索引擎会非常智能地检测出你的拼写错误，并且用对应的正确单词来进行搜索
 */

/**
 * 编辑距离指的就是，将一个字符串转化成另一个字符串，需要的最少编辑操作次数（比如增加一个字符、删除一个字符、替换一个字符）
 * @param input 
 * @param target 
 */
export function getMinEditDistance(input: string, target: string): number {
  let minDist = Infinity

  function editDistance(input: string, target: string, inputPos: number, targetPos: number, dis: number) {
    if(inputPos === input.length || targetPos === target.length) {
      if(targetPos < target.length) {
        dis = dis + (target.length - targetPos)
      }
      if (inputPos < target.length) {
        dis = dis + (input.length - inputPos)
      }
      if(minDist > dis) { minDist = dis }

      return 
    }
  
  
    if(input[inputPos] === target[targetPos]) {
      editDistance(input, target, inputPos+1, targetPos+1, dis)
    } else {
      // 删除input字符 或者 target增加字符
      editDistance(input, target, inputPos+1, targetPos, dis + 1)
      // 增加target字符 或者 target 删除字符
      editDistance(input, target, inputPos, targetPos+1, dis + 1)
      // 替换target字符 或者 target删除字符
      editDistance(input, target, inputPos+1, targetPos+1, dis + 1)
    }
  }

  editDistance(input, target, 0, 0, 0)

  return minDist
}



export function lwstDP(a: string, b: string) {
  const n = a.length
  const m = b.length
  const minDist = new Array(n).fill(0).map(() => new Array(m).fill(0))

  for (let i = 0; i < n; ++i) { // 初始化第0列:a[0..i]与b[0..0]的编辑距离
    if (a[i] == b[0]){
      minDist[i][0] = i;
    } else {
      if(i == 0) {
        minDist[i][0] = 1;
      } else {
        minDist[i][0] = minDist[i-1][0]+1;
      }
    }
  }

  for (let j = 0; j < m; j++) { // 初始化第0行:a[0..0]与b[0..j]的编辑距离
    if (a[0] === b[j]) {
      minDist[0][j] = j;
    } else {
      if(j === 0){
        minDist[0][j] = 1;
      } else {
        minDist[0][j] = minDist[0][j-1]+1;
      }
    }
  }
  
  for (let i = 1; i < n; ++i) { // 按行填表
    for (let j = 1; j < m; ++j) {
      if (a[i] === b[j]){
        minDist[i][j] = Math.min(minDist[i-1][j]+1, minDist[i][j-1]+1, minDist[i-1][j-1]);
      } else {
        minDist[i][j] = Math.min(minDist[i-1][j]+1, minDist[i][j-1]+1, minDist[i-1][j-1]+1);
      }
    }
  }

  return minDist[n-1][m-1];
}
