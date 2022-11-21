function inherit(Child, Parent) {
  // 继承原型上的属性 
 Child.prototype = Object.create(Parent.prototype)

  // 修复 constructor
 Child.prototype.constructor = Child

 // 存储超类
 Child.super = Parent

 // 静态属性继承
 if (Object.setPrototypeOf) {
     // setPrototypeOf es6
     Object.setPrototypeOf(Child, Parent)
 } else if (Child.__proto__) {
     // __proto__ es6 引入，但是部分浏览器早已支持
     Child.__proto__ = Parent
 } else {
     // 兼容 IE10 等陈旧浏览器
     // 将 Parent 上的静态属性和方法拷贝一份到 Child 上，不会覆盖 Child 上的方法
     for (var k in Parent) {
         if (Parent.hasOwnProperty(k) && !(k in Child)) {
             Child[k] = Parent[k]
         }
     }
 }
}


// 按照 Babel 编译 class 的方法，运行其产出后，仍然会得到报错“Uncaught TypeError: this is not a Date object.”，因此我们可以得知：Babel 并没有对继承 Date 进行特殊处理，无法做到兼容。
class DateConstructor extends Date {
  constructor() {
      super()
      this.foo ='bar'
  }

  getMyTime() {
      return this.getTime()
  }
}

let date = new DateConstructor()


// function DateConstructor() {

//   var dateObj = new(Function.prototype.bind.apply(Date, [Date].concat(Array.prototype.slice.call(arguments))))()

//   Object.setPrototypeOf(dateObj, DateConstructor.prototype)

//   dateObj.foo = 'bar'

//   return dateObj

// }

// Object.setPrototypeOf(DateConstructor.prototype, Date.prototype)

// DateConstructor.prototype.getMyTime = function getTime() {

//   return this.getTime()

// }

// let date = new DateConstructor()

// console.log(date.getMyTime())

