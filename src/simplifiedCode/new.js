
function create() {
	// 1、获得构造函数，同时删除 arguments 中第一个参数
    Con = [].shift.call(arguments);
	// 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性
    var obj = Object.create(Con.prototype);
	// 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性
    var ret = Con.apply(obj, arguments);
	// 4、优先返回构造函数返回的对象
	return ret instanceof Object ? ret : obj;
}

function new_instance_of(leftVaule, rightVaule) { 
  let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
  leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
  while (true) {
    if (leftVaule === null) {
          return false;	
      }
      if (leftVaule === rightProto) {
          return true;	
      } 
      leftVaule = leftVaule.__proto__ 
  }
}


function extend(Child, Parent) {
　　var F = function(){};
   F.prototype = Parent.prototype;
   Child.prototype = new F();
　 Child.prototype.constructor = Child;
　 Child.uber = Parent.prototype;
}