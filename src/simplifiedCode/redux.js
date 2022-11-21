// 这是一个简单的打日志中间件

function logger({ getState, dispatch }) {

  // next 代表下一个中间件包装过后的 dispatch 方法，action 表示当前接收到的动作

  return next => action => {

      console.log("before change", action);

      // 调用下一个中间件包装的 dispatch 

      let val = next(action);

      console.log("after change", getState(), val);

      return val;

  };

}

// 使用 logger 中间件，创建一个增强的 store

let createStoreWithMiddleware = Redux.applyMiddleware(logger)(Redux.createStore)

function applyMiddleware(...middlewares) {

// middlewares 为中间件列表，返回一个接受原始 createStore 方法（Redux.createStore）作为参数的函数

return createStore => (...args) => {

  // 创建原始的 store

  const store = createStore(...args)

  // 每个中间件都会被传入 middlewareAPI 对象，作为中间件参数

  const middlewareAPI = {

    getState: store.getState,

    dispatch: (...args) => dispatch(...args)

  }



  // 给每个中间件传入 middlewareAPI 参数

  // 中间件的统一模板为 next => action => next(action) 格式

  // chain 中保存的都是 next => action => {next(action)} 的方法

  const chain = middlewares.map(middleware => middleware(middlewareAPI))



  // 传入最原始 store.dispatch 方法，作为 compose 二级参数，compose 方法最终返回一个增强的dispatch 方法

  dispatch = compose(...chain)(store.dispatch)



  return {

    ...store,

    dispatch  // 返回一个增强版的 dispatch

  }

}

}
