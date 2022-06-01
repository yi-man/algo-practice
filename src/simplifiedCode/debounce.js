function debounce(fn, wait) {
  let id
  let startTime
  let endTime

  return function(...rest){
    if(id) {
      clearTimeout(id)
    }
    startTime = Date.now()
    console.log(startTime, endTime)

    id = setTimeout(()=>{
      fn(...rest)
      endTime = Date.now()
      console.log(222222222, startTime, endTime)
    }, wait)
  }
}

function t1(name) {
  console.log(name)
}
const fn = debounce(t1, 1000)

fn('t1')

setTimeout(()=>{fn('t2')}, 500)