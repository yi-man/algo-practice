function getFactorial(n: number){
  const factorial=new Array<number>(n-1)

  factorial[0] = 1
  for (let i = 1; i < n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }

  return factorial
}

export function getPermutation(n: number, k: number): string {
  const factorial = getFactorial(n)
  const nums = new Array(n).fill(0).map((key,v)=>v+1)
  let ret = ''

  k--

  for(let i=1; i<=n; i++) {
    const selected = Math.floor(k/factorial[n-i])
    
    k = k - selected * factorial[n-i]
    ret = `${ret}${nums[selected]}`
    nums.splice(selected,1)
  }

  return ret
}
