/**
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 */
function mul(base: string, char: string, index: number):string{
  let res = ''

  let next = 0

  for(let i = base.length - 1; i >=0; i--) {
    const v = base[i]
    const ret = Number(v) * Number(char) + next

    const now = ret % 10
     next = Math.floor(ret / 10)

    res = `${now}${res}`
  }

  if(next > 0) {
    res = `${next}${res}`
  }

  if(index > 0) {
    res = res.padEnd(res.length + index, '0')
  }

  return res
}

function isZero(str: string) {
  let isAllZero = true

  for(let i=0; i<str.length; i++) {
    if(str[i] !== '0'){
      isAllZero = false
      break
    }
  }

  return isAllZero
}

export function multiply(str1: string, str2: string): string {
  let res = ''

  if(isZero(str1) || isZero(str2)){
    return '0'
  }

  const tmp: string[] = []

  for(let i=str1.length - 1; i>=0; i--){
    tmp.push(mul(str2, str1[i], str1.length - i - 1))
  }

  for(let i=0; i<tmp.length; i++){
    let tmpV = tmp[i]

    let len = 0

    if (res.length > tmpV.length) {
      len = res.length
      tmpV = tmpV.padStart(res.length, '0')
    } else {
      len = tmpV.length
      res = res.padStart(tmpV.length, '0')
    }

    let shouldAdd = false;
    let tmpRes = ''

    for(let j=len - 1; j>=0; j--){
      const sum: number = Number(res[j]) + Number(tmpV[j]) + (shouldAdd ? 1 : 0)

      shouldAdd = sum >= 10

      if (sum >= 10) {
        tmpRes = `${sum - 10}${tmpRes}`
      } else {
        tmpRes = `${sum}${tmpRes}`
      }
    }

    if(shouldAdd){
      tmpRes = `1${tmpRes}`
    }

    res = tmpRes
  }

  return res
}