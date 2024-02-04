## typeof

typeof 操作符返回一个字符串，表示未经计算的操作数的类型

```javascript
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof [] // 'object'
typeof {} // 'object'
typeof console // 'object'
typeof console.log // 'function'
```

**注意**
--null 值表示一个空对象指针--
typeof null 为 object，但这只是 JavaScript 存在的一个悠久 Bug，不代表 null 就是引用数据类型，并且 null 本身也不是对象，if 语句中的判断===null

## instanceof

instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上(是否为这个函数的实例对象)

```js
// object为实例对象，constructor为构造函数
object instanceof constructor
[]  instanceof Array; // true
```

构造函数通过 new 可以实例对象，instanceof 能判断这个对象是否是之前那个构造函数生成的对象

```javascript
// 定义构建函数
let Car = function () {}
let benz = new Car()
benz instanceof Car // true
let car = new String('xxx')
car instanceof String // true
let str = 'xxx'
str instanceof String // false
```

##### 关于 instanceof 的实现原理

顺着原型链去找，直到找到相同的原型对象，返回 true，否则为 false

```js
function myInstanceof(left, right) {
  // 这里先用typeof来判断基础数据类型，如果是，直接返回false
  if (typeof left !== 'object' || left === null) return false
  // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if (proto === null) return false
    if (proto === right.prototype) return true //找到相同原型对象，返回true
    proto = Object.getPrototypeof(proto)
  }
}
```

## 区别

typeof 与 instanceof 都是判断数据类型的方法

1. typeof 会返回一个变量的基本类型，instanceof 返回的是一个布尔值

2. instanceof 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型

3. typeof 可以判断基础数据类型（null 除外），但是引用数据类型中，除了 function 类型以外，其他的也无法判断

## 扩展

## 检测数据类型

如果需要通用检测数据类型，可以采用 Object.prototype.toString  
Object.prototype.toString.call() 是 Object 的原型方法  
调用该方法，统一返回格式“[object Xxx]”的字符串

```javascript
Object.prototype.toString({}) // "[object Object]"
Object.prototype.toString.call({}) // 加上call也ok
Object.prototype.toString.call(1) // "[object Number]"
Object.prototype.toString.call('1') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(function () {}) // "[object Function]"
Object.prototype.toString.call(null) //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(/123/g) //"[object RegExp]"
Object.prototype.toString.call(new Date()) //"[object Date]"
Object.prototype.toString.call([]) //"[object Array]"
Object.prototype.toString.call(document) //"[object HTMLDocument]"
Object.prototype.toString.call(window) //"[object Window]"
```

## 怎么判断一个变量 arr 的话是否为数组（此题用 typeof 不行）？

```JS
arr instanceof Array
arr.constructor == Array
Object.protype.toString.call(arr) == '[Object Array]'
```
