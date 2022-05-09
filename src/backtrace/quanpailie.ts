export function sort(input: string[]) {
  const final: string[] = []

  function quanSort(input: string[], prefixStr: string) {
      for (let i = 0; i < input.length; i++) {
          const selected = input[i];
          const s = prefixStr + selected
          const left = input.slice()
          left.splice(i, 1)

          if (left.length > 0) {
              quanSort(left, s);
          } else {
              final.push(s)
          }
      }
  }

  quanSort(input, '')

  return final;
}

export const permute = function(nums: string[]) {
    const n = nums.length;
    const res: string[][] = [];
    const tmpPath: string[] = [];
    const backtrack = (tmpPath: string[]) => {
        if(tmpPath.length == n){
            res.push(tmpPath);
            return;
        }
        for(let i = 0;i < n;i++){
            if(!tmpPath.includes(nums[i])){
                tmpPath.push(nums[i]);
                backtrack(tmpPath.slice());
                tmpPath.pop();
            }
        }
    }
    backtrack(tmpPath);
    return res;
};

export function permute2 (nums: string[]) {
  const res: string[][] = []
  perm(nums, 0, nums.length - 1)
  return res

  // p 全排列的开始位置 q 全排列的结束位置
  function perm (arr: string[], p: number, q: number) {
    if (p === q) {
      res.push([...arr])
    } else {
      for (let i = p; i <= q; i++) {
        swap(arr, i, p)
        perm(arr, p + 1, q)
        swap(arr, i, p)
      }
    }
  }
}



function swap (arr: string[] | number[], p: number, q: number) {
  const temp = arr[p]
  arr[p] = arr[q]
  arr[q] = temp
}


export function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = []
  const memo = {}
  perm3(nums, 0, nums.length - 1, res, memo)
  return res

  function perm3 (arr: number[], start: number, end: number, res: number[][], memo: {[key: string]: boolean}) {
    if (start === end) {
      const k = arr.join('')
      if (!memo[k]){
        res.push([...arr])
        memo[k] = true
      }
    } else {
      for (let i = start; i <= end; i++) {
        swap(arr, i, start)
        perm3(arr, start + 1, end, res, memo)
        swap(arr, i, start)
      }
    }
  }
}
