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
typeof null为object，但这只是JavaScript 存在的一个悠久Bug，不代表null就是引用数据类型，并且null本身也不是对象

## instanceof
instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

使用如下：

object instanceof constructor
object为实例对象，constructor为构造函数

构造函数通过new可以实例对象，instanceof能判断这个对象是否是之前那个构造函数生成的对象

```javascript
// 定义构建函数
let Car = function() {}
let benz = new Car()
benz instanceof Car // true
let car = new String('xxx')
car instanceof String // true
let str = 'xxx'
str instanceof String // false
```

## typeof与instanceof都是判断数据类型的方法，区别：

1. typeof会返回一个变量的基本类型，instanceof返回的是一个布尔值

2. instanceof 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型

3. typeof 可以判断基础数据类型（null 除外），但是引用数据类型中，除了function 类型以外，其他的也无法判断

## 扩展
如果需要通用检测数据类型，可以采用Object.prototype.toString，调用该方法，统一返回格式“[object Xxx]”的字符串

```javascript
Object.prototype.toString({})       // "[object Object]"
Object.prototype.toString.call({})  // 加上call也ok
Object.prototype.toString.call(1)    // "[object Number]"
Object.prototype.toString.call('1')  // "[object String]"
Object.prototype.toString.call(true)  // "[object Boolean]"
Object.prototype.toString.call(function(){})  // "[object Function]"
Object.prototype.toString.call(null)   //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(/123/g)    //"[object RegExp]"
Object.prototype.toString.call(new Date()) //"[object Date]"
Object.prototype.toString.call([])       //"[object Array]"
Object.prototype.toString.call(document)  //"[object HTMLDocument]"
Object.prototype.toString.call(window)   //"[object Window]"
```