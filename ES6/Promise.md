## 为什么promise可以链式使用then?

实现链式调用的原理在于 then 方法返回的新 Promise 对象能够捕获上一个 Promise 对象的状态改变。这使得在链式调用中可以持续进行 then 方法的调用，每一个 then 都能够处理上一个 Promise 对象的状态变化，从而形成连续的异步操作
