function throtte(fn, wait){
  let running = false
  let args 
  let id = 0
  let startTime = 0

  return function(...rest){
    if(running && args === rest) {
      return
    }

    if(id) {
      clearTimeout(id)
    }

    const now = Date.now()
    if(!startTime){
      startTime = now
    }
    const left = wait - (now - startTime)

    running = true
    args = rest

    id = setTimeout(()=>{
      fn(...rest)
      running = false
      startTime = 0
    }, left)
  }
}

function t1(name) {
  console.log(name)
}
const fn = throtte(t1, 1000)

fn('t1')

setTimeout(()=>{fn('t2')}, 500)