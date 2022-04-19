/**
 * 39: 组合之和
给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 
对于给定的输入，保证和为 target 的不同组合数少于 150 个。
 */

export function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = []

  candidates.sort((a, b) => a - b)

  function findTarget(pos: number, leftTarget: number, found: number[]) {
    for(let i=pos; i<candidates.length; i++) {
      if(candidates[i] === leftTarget) {
        found.push(candidates[i])
        result.push(found.slice())
        found.pop()
      } else if (candidates[i] > leftTarget) {
        break
      } else {
        found.push(candidates[i])
        findTarget(i, leftTarget - candidates[i], found)
        found.pop()
      }
    }
  }

  findTarget(0, target, [])

  return result
}


export const combinationSumDfs = function(candidates: number[], target: number) {
  const ans: number[][] = [];
  const dfs = (target: number, combine: number[], idx: number) => {
      if (idx === candidates.length) {
          return;
      }
      if (target === 0) {
          ans.push(combine);
          return;
      }
      // 直接跳过
      dfs(target, combine, idx + 1);
      // 选择当前数
      if (target - candidates[idx] >= 0) {
          dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
      }
  }

  dfs(target, [], 0);
  return ans;
};


/**
candidates 中的每个数字在每个组合中只能使用 一次 。
解集不能包含重复的组合
 */
export function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = []

  candidates.sort((a, b) => a - b)

  function findTarget(pos: number, leftTarget: number, found: number[]) {
    for(let i=pos; i<candidates.length; i++) {
      if (i > pos && candidates[i] == candidates[i - 1]) {
        continue;
      }
      if(candidates[i] === leftTarget) {
        found.push(candidates[i])
        result.push(found.slice())
        found.pop()
      } else if (candidates[i] > leftTarget) {
        break
      } else {
        found.push(candidates[i])
        findTarget(i + 1, leftTarget - candidates[i], found)
        found.pop()
      }
    }
  }

  findTarget(0, target, [])

  return result
}

export const combinationSumDfs2 = function(candidates: number[], target: number) {
  const ans: number[][] = [];
  candidates.sort((a, b) => a - b)

  const repeatMap: {[k: string]: boolean} = {}

  const dfs = (target: number, combine: number[], idx: number) => {
      if (idx === candidates.length) {
          return;
      }

      // 直接跳过
      dfs(target, combine, idx + 1);
      // 选择当前数
      if (target - candidates[idx] > 0) {
          dfs(target - candidates[idx], [...combine, candidates[idx]], idx + 1);
      }else if(target - candidates[idx] === 0) {
        const oneAns = [...combine, candidates[idx]]
        const k = oneAns.sort().join()

        if(!repeatMap[k]) {
          ans.push(oneAns);
          repeatMap[k] = true
        }
          return;
      }

  }

  dfs(target, [], 0);
  return ans;
};

