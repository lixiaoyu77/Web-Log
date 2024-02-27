## Generator

解决异步的手段：
回调函数
**Promise 对象**
**async/await**
**Generator 函数： ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同**

执行 Generator 函数会返回一个遍历器对象，可以依次遍历 Generator 函数内部的每一个状态

形式上，Generator 函数是一个普通函数，但是有两个特征：

1. function 关键字与函数名之间有一个星号
2. 函数体内部使用 yield 表达式，定义不同的内部状态

```js
function* helloWorldGenerator() {
  yield 'hello'
  yield 'world'
  return 'ending'
}
```
