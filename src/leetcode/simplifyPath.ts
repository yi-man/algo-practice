export function simplifyPath(path: string): string {
  const result = []
  const pathNameArr = path.split('/')

  for(let i=1; i<pathNameArr.length; i++) {
    const c = pathNameArr[i]

    if(c === '.' || c === '/' || c === '') {
      continue
    } else if(c === '..') {
      if(result.length !== 0) {
        result.pop()
      }
    } else {
      result.push(c)
    }
  }

  return `/${result.join('/')}`
}