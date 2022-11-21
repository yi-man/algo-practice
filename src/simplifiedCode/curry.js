// curry 化，柯里化（currying），又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数且返回结果的新函数的技术
export const curry = (fn, length) => {
  // 记录函数的行参个数
   length = length || fn.length

   return function (...args) {
       // 当参数未满时，递归调用
       if (args.length < length) {
           return curry(fn.bind(this, ...args), length - args.length)
       }
       // 参数已满，执行 fn 函数
       else {
           return fn.call(this, ...args)
       }
   }
}


// 反 curry 化通用函数挂载在函数原型上
// Function.prototype.unCurry = !Function.prototype.unCurry || function () {
//   const self = this
//   return function () {
//       return Function.prototype.call.apply(self, arguments)
//   }
// }

Function.prototype.unCurry = function() {

  return this.call.bind(this)

}
