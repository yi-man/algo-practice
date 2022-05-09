/**
 * @param items 物品数组
 * @param w 背包可承受的最大重量
 */
export function bag(items: number[], w: number) {
  const len = items.length
  const states = new Array(len).fill(0).map(()=> new Array(w + 1).fill(false))

  states[0][0] = true
  if (items[0] <= w) { 
    states[0][items[0]] = true
  }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < w+1; j++) {
      if (states[i-1][j] === true) {
        states[i][j] = states[i-1][j]
      } 
    }
    for (let j = 0; j <= w-items[i]; j++) {
      if (states[i-1][j]===true){
        states[i][j+items[i]] = true
      } 
    }
  }

  for (let i = w; i >= 0; --i) { 
    // 输出结果 
    if (states[len-1][i] == true) return i; 
  }

  return 0
}
