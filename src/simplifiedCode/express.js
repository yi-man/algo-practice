const sleep = function(time) {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve()
    }, time)
  })
}

const fn = (req, res) => {

  console.log('第一个中间件');

  ((req, res) => {

    console.log('第二个中间件');

    (async(req, res) => {

      console.log('第三个中间件 => 是一个 route 中间件，处理 /api/test1');

      await sleep(2000)

      console.log('第三个中间件 调用结束')

      // res.status(200).send('hello')

    })(req, res)

    console.log('第二个中间件调用结束');

  })(req, res)

  console.log('第一个中间件调用结束')

}

fn({}, {})
