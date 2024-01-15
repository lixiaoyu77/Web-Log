
**async 是异步的意思，await则可以理解为 async wait。所以可以理解async就是用来声明一个异步方法，而await是用来等待异步方法执行**

# async
```javascript
async函数返回一个promise对象，下面两种方法是等效的

function f() {
    return Promise.resolve('TEST');
}

// asyncF is equivalent to f!
async function asyncF() {
    return 'TEST';
}
```
# await
正常情况下，await命令后面是一个 Promise对象，返回该对象的结果。如果不是 Promise对象，就直接返回对应的值

async function f(){
    // 等同于
    // return 123
    return await 123
}
f().then(v => console.log(v)) // 123
不管await后面跟着的是什么，await都会阻塞后面的代码

async function fn1 (){
    console.log(1)
    await fn2()
    console.log(2) // 阻塞
}

async function fn2 (){
    console.log('fn2')
}

fn1()
console.log(3)
上面的例子中，await 会阻塞下面的代码（即加入微任务队列），先执行 async外面的同步代码，同步代码执行完，再回到 async 函数中，再执行之前阻塞的代码

所以上述输出结果为：1，fn2，3，2

#四、流程分析
通过对上面的了解，我们对JavaScript对各种场景的执行顺序有了大致的了解

这里直接上代码：

async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('settimeout')
})
async1()
new Promise(function (resolve) {
    console.log('promise1')
    resolve()
}).then(function () {
    console.log('promise2')
})
console.log('script end')
分析过程：

执行整段代码，遇到 console.log('script start') 直接打印结果，输出 script start
遇到定时器了，它是宏任务，先放着不执行
遇到 async1()，执行 async1 函数，先打印 async1 start，下面遇到await怎么办？先执行 async2，打印 async2，然后阻塞下面代码（即加入微任务列表），跳出去执行同步代码
跳到 new Promise 这里，直接执行，打印 promise1，下面遇到 .then()，它是微任务，放到微任务列表等待执行
最后一行直接打印 script end，现在同步代码执行完了，开始执行微任务，即 await下面的代码，打印 async1 end
继续执行下一个微任务，即执行 then 的回调，打印 promise2
上一个宏任务所有事都做完了，开始下一个宏任务，就是定时器，打印 settimeout
所以最后的结果是：script start、async1 start、async2、promise1、script end、async1 end、promise2、settimeout