// 绑定作用域
Function.prototype.bind1 = function(context){
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const self = this;  //保存this，即调用bind方法的目标函数
  return function(){
      return self.apply(context,arguments);
  };
};

// 绑定作用域， 有偏函数功能
Function.prototype.bind2 = function(context){
  var args = Array.prototype.slice.call(arguments, 1)
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const self = this;
  return function(){
      var innerArgs = Array.prototype.slice.call(arguments);
      var finalArgs = args.concat(innerArgs);
      return self.apply(context,finalArgs);
  };
};

// 绑定作用域， 有偏函数功能, 可作为构造函数
Function.prototype.bind3 = function(context){
  var args = Array.prototype.slice(arguments, 1)
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const self = this
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const F = function(){}

  F.prototype = self.prototype;

  bound = function(){
      var innerArgs = Array.prototype.slice.call(arguments);
      var finalArgs = args.concat(innerArgs);
      return self.apply((this instanceof F ? this : context), finalArgs);
  };

  bound.prototype = new F();

  return bound;
};


// browserify 可以直接使用
Function.prototype.bind4 = function (oThis) {
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
  }

  const aArgs = Array.prototype.slice.call(arguments, 1)

  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const fToBind = this
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const fNOP = function () {}
  
  const fBound = function () {
      return fToBind.apply(
          this instanceof fNOP && oThis ? this : oThis || window,
          aArgs.concat(Array.prototype.slice.call(arguments))
      );
    };

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();

  return fBound;
};

