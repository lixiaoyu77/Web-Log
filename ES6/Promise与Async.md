# Promise 和 async/await 都是用于处理 JavaScript 中的异步编程的工具
### Promise:
基本结构： Promise 是一个表示异步操作最终完成或失败的对象。它有三个状态：pending（进行中）、fulfilled（已成功）、rejected（已失败）。使用 new Promise() 创建一个 Promise 实例。

```javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作
  if (/* 操作成功 */) {
    resolve(result);
  } else {
    reject(error);
  }
});
链式调用： Promise 支持链式调用，通过 .then() 处理成功的情况，.catch() 处理失败的情况。也可以使用 .finally() 处理不管成功或失败都要执行的逻辑。
```

```javascript
promise.then(result => {
  // 处理成功的情况
}).catch(error => {
  // 处理失败的情况
}).finally(() => {
  // 无论成功或失败都要执行的逻辑
});
```

### async/await:
基本结构： async/await 是 ES2017（ES8）引入的异步编程语法糖。通过在函数前加 async 关键字定义异步函数，然后在异步操作前加 await 关键字等待其完成。

```javascript
async function myAsyncFunction() {
  try {
    const result = await myPromiseFunction();
    // 处理成功的情况
  } catch (error) {
    // 处理失败的情况
  }
}
```
简洁性： async/await 语法使异步代码更加清晰、易读，并且避免了回调地狱的问题。它让异步代码看起来更像同步代码  
错误处理： 使用 try/catch 结构来处理异步操作的成功和失败，使得错误处理更直观  
顺序执行： async/await 更容易控制异步操作的执行顺序，通过 await 关键字，可以确保在一个异步操作完成后再执行下一个  
返回值： async 函数总是返回一个 Promise 对象，可以通过 await 获取异步操作的结果  

### 总结
在实际应用中，async/await 通常被认为是更现代、更优雅的异步编程方式，因为它提供了更清晰、更直观的代码结构  
Promise 仍然是底层的异步模型，但 async/await 是建立在 Promise 基础上的更高级的抽象



## 扩展





