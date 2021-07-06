export function sort(input: string[]) {
  let final: string[] = []

  function quanSort(input: string[], prefixStr: string) {
      for (let i = 0; i < input.length; i++) {
          let selected = input[i];
          let s = prefixStr + selected
          let left = input.slice()
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
    let n = nums.length;
    let res: string[][] = [];
    let tmpPath: string[] = [];
    let backtrack = (tmpPath: string[]) => {
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
    let res: string[][] = []
    perm(nums, 0, nums.length - 1, res)
    return res
  }

  // p 全排列的开始位置 q 全排列的结束位置
  function perm (arr: string[], p: number, q: number, res: string[][]) {
    if (p === q) {
      // console.log('当前已全部排列完', arr)
      res.push([...arr])
    } else {
      for (let i = p; i <= q; i++) {
        // console.log(`这是要对 ${arr[p]}(下标 ${p}) - ${arr[q]}(下标 ${q}) 进行全排列, 当前 arr ${arr}`)
        swap(arr, i, p)
        // console.log(`交换了 ${arr[i]}(下标 ${i}) 和 ${arr[p]}(下标 ${p}) 的位置, 当前 arr ${arr}`)
        perm(arr, p + 1, q, res)
        // console.log(`再次交换 ${arr[i]}(下标 ${i}) 和 ${arr[p]}(下标 ${p}) 的位置, 当前 arr ${arr}`)
        // 这里再次交换是为了保证 arr 的相对一致
        swap(arr, i, p)
      }
    }
  }

  function swap (arr: string[], p: number, q: number) {
    let temp = arr[p]
    arr[p] = arr[q]
    arr[q] = temp
  }

