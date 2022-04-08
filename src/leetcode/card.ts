/**
 * 实现方法，判定给定的任意5-7张牌中是否*含有*同花顺牌型。
什么是同花顺：5张牌，牌面数字连续，并且花色相同，即可构成同花顺
一副牌4种花色分别是♠, ♥, ♣, ♦，每个花色从A到K共13张牌，总共4*13=52张牌
要求：用0-51表示这52张牌，按照顺序，♠A-♠K为0-12，♥A-♥K为13-25，♣A-♣K为26-38，♦A-♦K为39-51
实现方法，对于给定的数组input，返回true或者false
 */

export function judge(input: number[]){

  const groupArr: Array<number[]> = [
    [],
    [],
    [],
    []
  ]

  input.forEach(num => {
      if (num >=0 && num <= 12) {
        groupArr[0].push(num)
      }
      if (num >=13 && num <= 25) {
        groupArr[1].push(num)
      }
      if (num >=26 && num <= 38) {
        groupArr[2].push(num)
      }
      if (num >=39 && num <= 51) {
        groupArr[3].push(num)
      }
  })

  const found = groupArr.filter(arr => arr.length >= 5);

  if (found.length > 0) {
    for (const values of found) {
      values.sort((a, b) => a - b);

      for (let i = 0; i <= values.length - 5; i++) {
        const first = values[i];
        const last = values[i + 4]

        if (last - first === 4) {
          return true
        }
      }
    }
  }

  return false
}
