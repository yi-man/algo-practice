/**
给定一个字符串 s 和一些 长度相同 的单词 words 。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
注意子串要与 words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 words 中单词串联的顺序。
 */

export function findSubstring(s: string, words: string[]): number[] {
  const indexArr: number[] = []
  // TODO: 判断是否为空
  const len = words[0].length
  const wordsMap = new Map()

  words.forEach((word) => {
    wordsMap.set(word, wordsMap.get(word) + 1 || 1)
  })

  // 子串出现的次数
  const matchMap = new Map<string, number>()

  for(let i=0; i<s.length - len * words.length + 1; i++) {
    const word = s.substring(i, i+len)

    if(wordsMap.has(word)) {
      for(let j = i; j < s.length; j += len) {
        const jWord = s.substring(j, j+len)

        if(wordsMap.has(jWord)) {
          if(!matchMap.has(jWord)) {
            matchMap.set(jWord, 1)
          } else{
            if (wordsMap.get(jWord) === matchMap.get(jWord)){
              break
            } else {
              matchMap.set(jWord, (matchMap.get(jWord) as number) + 1)
            }
          }

          if(equals(wordsMap, matchMap)) {
            indexArr.push(i)
            break
          }
        }else {
          break
        }
      }
      matchMap.clear()
    }
  }

  return indexArr
}

function equals(map1: Map<string, number>, map2: Map<string, number>): boolean {
  let equal = true

  if (map1.size > 0 && map2.size > 0 && map1.size !== map2.size) {
    return false
  }

  for(const k of map1.keys()) {
    if(map1.get(k) !== map2.get(k)) {
      equal = false
      break
    }
  }

  return equal
}
