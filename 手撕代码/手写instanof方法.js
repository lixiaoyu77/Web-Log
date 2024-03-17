function myInstanceOf (obj, constructor) {
  // 首先判断 constructor 是否为函数
  if (typeof constructor !== 'function') {
    throw new TypeError('Right-hand side of instanceof is not callable')
  }

  // 判断 obj 是否为对象
  if (obj === null || typeof obj !== 'object') {
    return false
  }

  // 获取 constructor 函数的原型对象
  let proto = Object.getPrototypeOf(obj)

  // 在原型链中循环查找 constructor 函数的原型
  while (proto !== null) {
    if (proto === constructor.prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }

  return false
}


function myInstanceof (left, right) {
  // 这里先用typeof来判断基础数据类型，如果是，直接返回false
  if (typeof left !== 'object' || left === null) return false
  // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if (proto === null) return false
    if (proto === right.prototype) return true//找到相同原型对象，返回true
    proto = Object.getPrototypeof(proto)
  }
}
// 示例
function Person () { }
const person = new Person()
console.log(myInstanceOf(person, Person)) // 输出 true
console.log(myInstanceOf(person, Object)) // 输出 true，因为 Person 的原型链上有 Object
console.log(myInstanceOf(person, Array)) // 输出 false，因为 Person 的原型链上没有 Array
console.log(myInstanceOf(null, Object)) // 输出 false，null 不是对象
console.log(myInstanceOf({}, Function)) // 输出 false，{} 的原型链上没有 Function
