/**
 * @description 三数之和为0
 * @param sums 数组
 * 
 * 双指针遍历
 * 时间复杂度 O(n2)
 * 空间复杂度 O(1)
 */
export function sumOfThreeNums(sums: number[]){
  const len = sums.length

  if (len < 3) {
    throw Error('数组长度小于三')
  }

  const targetTotal = 0;
  const sorted = sums.sort((a, b) => a - b)
  const record = []

  for(let i = 0; i < len; i++) {
    const v = sorted[i]

    // v 大于 targetTotal 时，无需再统计
    if (v >= targetTotal) {
      break;
    }
    // 过滤掉相等的值
    if (i > 0 && v === sorted[i - 1]) {
      continue
    }

    let sum = v;
    let lp = i + 1
    let rp = len - 1
    let L = sorted[lp]
    let R = sorted[rp]

    while(rp > lp){
      sum = v + L + R
      if (sum === targetTotal) {
        record.push([v, L, R])

        // 继续循环， 可能有多个和， 重复时， 往后
        while(lp < rp && sorted[lp] === sorted[lp + 1]) {
          lp++
          L = sorted[lp]
        }
            
        while(lp < rp && sorted[rp] === sorted[rp - 1]) {
          rp--
          R = sorted[rp]
        }
        lp++
        L = sorted[lp]
        rp--
        R = sorted[rp]
      } else if (sum > targetTotal) {
        rp--
        R = sorted[rp]
      } else {
        lp++
        L = sorted[lp]
      }
    }
  }

  return record
}


/**
给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。
 */
export function closestValue(sums: number[], target: number) {
  const len = sums.length
  if(len < 3) {
    throw new Error('数组长度小于三')
  }

  sums.sort((a, b) => a -b)
  let closest = Infinity

  for(let i = 0; i < len - 2; i++) {
    const v = sums[i]

    let lp = i + 1
    let rp = len - 1

    while(lp < rp) {
      const sum = v + sums[lp] + sums[rp]

      if (sum === target) {
        return target
      } else if (sum > target) {
        rp--

        while(lp < rp && v === sums[rp]) {
          rp--
        }
      } else {
        lp++

        while(lp < rp && v === sums[lp]) {
          lp++
        }
      }

      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum
      }
    }
  }

  return closest
}
