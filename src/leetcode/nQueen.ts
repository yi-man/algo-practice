function init(n: number): number[][] {
  const fighters = []

  for(let i=0; i < n; i++) {
    fighters[i] = Array.from({length: n}, () => 0)
  }

  return fighters
}

// 返回reset的col值
function reset(fighters: number[][], step: number): number {
  for(let i = 0; i<fighters.length; i++) {
    if (fighters[step][i] === 1) {
      fighters[step][i] = 0
      return i
    }
  }
  return 0
}

function isValid(fighters: number[][], step: number, col: number): boolean {
  let valid =true

  for(let i = step-1; i >=0; i--) {
    if (fighters[i][col] === 1) {
      valid = false
      break
    }

    const gap = step - i

    if(step - gap >= 0) {
      if(col-gap >=0 && fighters[i][col-gap] === 1){
        valid = false
        break
      }
    }
    if(step + gap < fighters.length) {
      if(col+gap < fighters.length && fighters[i][col+gap] === 1){
        valid = false
        break
      }
    }
  }

  return valid
}

/**
 * 
 * @param n n*n
 */
export function nQueen(n: number){
  const fighters = init(n)
  
  let step = 0
  let forward = true
  // n step
  while(step < n) {
    let startIndex = 0

    if (!forward) {
      startIndex = reset(fighters, step) + 1

      // 如果大于n，说明已经没有可以放置的位置了
      if (startIndex >= n) {
        if (step >0) {
          step--
        } else {
          return false
        }
      } else {
        forward = true
      }
    }

    for(let j = startIndex; j < n; j++) {
      const valid = isValid(fighters, step, j)
      if(valid) {
        fighters[step][j] = 1
        step++
        forward = true
        break
      } else {
        // 该行没找到满足条件的列
        if (j === n-1) {
          if (step > 0) {
            step--
            forward = false
          } else {
            // can't find a solution
            return false
          }
        }
      }
    }
  }

  return fighters
}

enum BacktraceResult {
  NOT_FOUND = 0,
  FOUND = 1,
}
export function nBacktraceQueen(n: number){
  const fighters = init(n)

  function backtrace(fighters: number[][], step: number, startIndex: number) {
    for(let j = startIndex; j < n; j++) {
      const valid = isValid(fighters, step, j)
      if(valid) {
        fighters[step][j] = 1
        step++

        if (step === n) {
          return BacktraceResult.FOUND
        } else {
          const ret = backtrace(fighters, step, 0)

          if (ret === BacktraceResult.FOUND) {
            return BacktraceResult.FOUND
          } else {
            step--
            fighters[step][j] = 0
          }
        }
      }
    }

    return BacktraceResult.NOT_FOUND
  }

  const ret = backtrace(fighters, 0, 0)

  if (ret === BacktraceResult.FOUND) {
    return fighters
  }

  return false
}

/**
 * https://leetcode-cn.com/problems/n-queens/solution/nhuang-hou-by-leetcode-solution/
 * 找出所有的解
 */
export class NQueen {
  public solveNQueens(n: number) {
    // 所有解决方案
    const solutions = new Array<string>()
    // 记录皇后的位置
    const queens = (new Array(n)).fill(-1);
    // 列
    const columns = new Set<number>();
    // 斜线1    左上到右下
    const diagonals1 = new Set<number>();
    // 斜线2    右上到左下
    const diagonals2 = new Set<number>();
    
    this.backtrack(solutions, queens, n, 0, columns, diagonals1, diagonals2);

    return solutions;
  }

  public  backtrack(solutions: string[], queens: number[], n: number, row: number, columns: Set<number>, diagonals1: Set<number>, diagonals2: Set<number>) {
      if (row == n) {
          const board = this.generateBoard(queens, n);
          solutions.push(board);
      } else {
          for (let i = 0; i < n; i++) {
						// columns已被占用
            if (columns.has(i)) {
                continue;
            }
						// 斜线1已被占用
            const diagonal1 = row - i;
            if (diagonals1.has(diagonal1)) {
                continue;
            }
						// 斜线2已被占用
            const diagonal2 = row + i;
            if (diagonals2.has(diagonal2)) {
                continue;
            }

            queens[row] = i;
            columns.add(i);
            diagonals1.add(diagonal1);
            diagonals2.add(diagonal2);

            this.backtrack(solutions, queens, n, row + 1, columns, diagonals1, diagonals2);

            queens[row] = -1;
            columns.delete(i);
            diagonals1.delete(diagonal1);
            diagonals2.delete(diagonal2);
          }
      }
  }

  public generateBoard(queens: number[], n: number) {
      let board = '';
      for (let i = 0; i < n; i++) {
        const row = new Array(n).fill('.');

        row[queens[i]] = 'Q';
        board += row.join('') + '\n';
      }
      return board;
  }
}
