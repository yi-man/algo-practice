function getWordsMap(words: string[]) {
  const wordsMap = new Map()

  words.forEach((word) => {
    wordsMap.set(word, wordsMap.get(word) + 1 || 1)
  })

  return wordsMap
}

function isMeet(s: string, words: string[], startIndex: number, wordsMap: Map<string, number>): boolean {
  let result = false
  const matchMap = new Map<string, number>()
  const len = words[0].length

  for(let j = startIndex; j < s.length; j += len) {
    const word = s.substring(j, j+len)
    const wordsMapValue = wordsMap.get(word)
    const matchMapValue = matchMap.get(word)

    if(wordsMapValue) {
      if(!matchMapValue) {
        matchMap.set(word, 1)
      } else{
        if (wordsMapValue === matchMapValue){
          break
        } else {
          matchMap.set(word, matchMapValue + 1)
        }
      }

      if(equals(wordsMap, matchMap)) {
        result = true
        break
      }
    }else {
      break
    }
  }

  return result
}
export function findSubstring2(s: string, words: string[]): number[] {
  const result: number[] = []
  const len = words[0].length

  const wordsMap = getWordsMap(words)

  // 从0开始遍历字符串，每次遍历一个字符串
  for(let i=0; i<s.length - len * words.length + 1; i++) {
    const word = s.substring(i, i+len)

    if(wordsMap.has(word)) {
      // 看接下里的字符是否满足条件
      if (isMeet(s, words, i, wordsMap)) {
        result.push(i)
      }
    }
  }

  return result
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
