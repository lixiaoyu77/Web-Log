# bind、call和apply是JavaScript中用于改变函数执行时的上下文，简而言之就是改变函数运行时的this指向

#### 例
```javascript
var name = "lucy";
var obj = {
    name: "martin",
    say: function () {
        console.log(this.name);
    }
};
obj.say(); // martin，this 指向 obj 对象
setTimeout(obj.say,0); // lucy，this 指向 window 对象
```
在定时器中是作为回调函数来执行的，因此回到主栈执行时是在**全局执行上下文的环境**中执行的，this指向window，输出lucy  

实际需要this指向obj对象，这时候就需要该改变this指向了
```javascript
setTimeout(obj.say.bind(obj),0); //martin，this指向obj对象
```

# bind、call和apply的区别

## bind
bind 方法创建一个新函数，将其 this 值设置为传递给 bind 方法的值。  
bind 不会立即调用函数，而是返回一个新函数。这个新函数可以稍后调用，并且它的 this 值会保持绑定的值。   
语法：
```js 
newFunction = originalFunction.bind(thisValue); 
```

```javascript
const originalFunction = function() {
  console.log(this.name);
};
const boundFunction = originalFunction.bind({ name: 'Alice' });
boundFunction(); // 输出: Alice
```

## call
call 方法允许你调用一个函数，显式设置函数执行时的 this 值，并传递一个参数列表。
语法：
```js
function.call(thisValue, arg1, arg2, ...);
```
```javascript
const printName = function(greeting) {
  console.log(greeting + ' ' + this.name);
};
const person = { name: 'Bob' };
printName.call(person, 'Hello'); // 输出: Hello Bob
```

## apply
apply 方法与 call 类似，但是参数列表是通过一个数组传递的。  
语法：
```js
function.apply(thisValue, [arg1, arg2, ...]);
```

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = function() {
  return this.reduce((acc, val) => acc + val, 0);
};
const result = sum.apply(numbers); // 输出: 15
```

# 总结
1. bind 用于创建一个新函数，固定 this 值，并且可以稍后调用。
2. call 用于调用函数，设置 this 值，并传递参数列表。
3. apply 与 call 类似，但参数列表是通过数组传递的。

# 扩展
## 实现一个bind
实现bind的步骤，我们可以分解成为三部分：

1. 修改this指向
2. 动态传递参数
 - 方式一：只在bind中传递函数参数 fn.bind(obj,1,2)()
 - 方式二：在bind中传递函数参数，也在返回函数中传递参数 fn.bind(obj,1)(2)
3. 兼容new关键字

```javascript
Function.prototype.myBind = function (context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    // 获取参数
    const args = [...arguments].slice(1),
          fn = this;

    return function Fn() {
        // 根据调用方式，传入不同绑定值
        return fn.apply(this instanceof Fn ? new fn(...arguments) : context, args.concat(...arguments)); 
    }
}
```